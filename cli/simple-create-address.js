#!/usr/bin/env node

/**
 * Simple CLI tool to test address creation with Layer1 API
 * This version doesn't rely on the existing SDK structure
 */

import fs from 'fs';
import crypto from 'crypto';
import https from 'https';
import { URL } from 'url';

// Layer1Digest class for handling RFC 9421 authentication
class Layer1Digest {
  constructor(signingPrivateKey, clientId) {
    this.clientId = clientId;
    this.signingKey = this.prepareKey(signingPrivateKey);
  }

  buildHeaders(url, payload, method) {
    const headerParams = {};
    let contentDigest = null;

    if (payload && payload.length > 0) {
      contentDigest = this.createDigest('sha-256', payload);
      headerParams['Content-Digest'] = contentDigest;
    }

    const signatureParameters = this.createSignatureParameters(contentDigest);
    headerParams['Signature-Input'] = `sig=${signatureParameters}`;

    const signatureBase = this.createSignatureBase(method, url, contentDigest, signatureParameters);
    const signature = this.sign(signatureBase);
    headerParams['Signature'] = `sig=:${signature}:`;

    return headerParams;
  }

  createSignatureBase(method, url, contentDigest, signatureParameters) {
    return `"@method": ${method.toUpperCase()}\n"@target-uri": ${url}\n${
      contentDigest ? `"content-digest": ${contentDigest}\n` : ''
    }"@signature-params": ${signatureParameters}`;
  }

  sign(signatureBase) {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(signatureBase);
    sign.end();
    return sign.sign(this.signingKey, 'base64');
  }

  createSignatureParameters(contentDigest) {
    const components = ['"@method"', '"@target-uri"'];
    if (contentDigest) {
      components.push('"content-digest"');
    }
    
    const created = Math.floor(Date.now() / 1000);
    return `(${components.join(' ')});created=${created};keyid="${this.clientId}";alg="rsa-v1_5-sha256"`;
  }

  createDigest(digestAlgorithm, data) {
    const hash = crypto.createHash(digestAlgorithm.replace('sha-', 'sha'));
    hash.update(data);
    const digest = hash.digest('base64');
    return `${digestAlgorithm}=:${digest}:`;
  }

  prepareKey(rawKey) {
    let newKey = rawKey.replace('-----BEGIN PRIVATE KEY-----', '');
    newKey = newKey.replace('-----END PRIVATE KEY-----', '');
    newKey = newKey.replace(/\s+/g, '');
    
    // Return the key with proper PEM format
    return `-----BEGIN PRIVATE KEY-----\n${newKey}\n-----END PRIVATE KEY-----`;
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const helpText = `
Usage: node simple-create-address.js [options]

Options:
  --client-id <id>       Client ID for authentication (required)
  --private-key <path>   Path to private key file (required)
  --asset-pool-id <id>   Asset pool ID (required)
  --network <network>    Network (required, e.g., ETHEREUM)
  --reference <ref>      Reference (required)
  --base-path <url>      API base path (default: https://api.staging.layer1.com)
  --help                 Show this help message

Example:
  node simple-create-address.js --client-id 20ff4e7d-8f1f-499f-8720-365a73e6f1f5 \\
    --private-key ./private-key.pem \\
    --asset-pool-id 14a066e3-00d4-4b68-b8ee-37d385a32ad9 \\
    --network ETHEREUM \\
    --reference my-user-id
`;

// Parse arguments
const options = {
  basePath: 'https://api.staging.layer1.com'
};

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '--client-id':
      options.clientId = args[++i];
      break;
    case '--private-key':
      options.privateKeyPath = args[++i];
      break;
    case '--asset-pool-id':
      options.assetPoolId = args[++i];
      break;
    case '--network':
      options.network = args[++i];
      break;
    case '--reference':
      options.reference = args[++i];
      break;
    case '--base-path':
      options.basePath = args[++i];
      break;
    case '--help':
      console.log(helpText);
      process.exit(0);
      break;
    default:
      console.error(`Unknown option: ${args[i]}`);
      console.log(helpText);
      process.exit(1);
  }
}

// Validate required options
const requiredOptions = ['clientId', 'privateKeyPath', 'assetPoolId', 'network', 'reference'];
const missingOptions = requiredOptions.filter(opt => !options[opt]);

if (missingOptions.length > 0) {
  console.error(`Missing required options: ${missingOptions.join(', ')}`);
  console.log(helpText);
  process.exit(1);
}

// Read private key
let privateKey;
try {
  privateKey = fs.readFileSync(options.privateKeyPath, 'utf8');
} catch (error) {
  console.error(`Error reading private key file: ${error.message}`);
  process.exit(1);
}

// Create address request
const addressRequest = {
  assetPoolId: options.assetPoolId,
  network: options.network,
  reference: options.reference
};

// Create Layer1Digest instance
const layer1Digest = new Layer1Digest(privateKey, options.clientId);

// Make the API request
const makeRequest = () => {
  return new Promise((resolve, reject) => {
    const endpoint = '/digital/v1/addresses';
    const url = `${options.basePath}${endpoint}`;
    const parsedUrl = new URL(url);
    
    const requestBody = JSON.stringify(addressRequest);
    
    // Get authentication headers
    const authHeaders = layer1Digest.buildHeaders(url, requestBody, 'POST');
    
    const requestOptions = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || 443,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody),
        ...authHeaders
      }
    };
    
    console.log('Making request to:', url);
    console.log('Request body:', requestBody);
    console.log('Headers:', JSON.stringify(requestOptions.headers, null, 2));
    
    const req = https.request(requestOptions, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log(`Status code: ${res.statusCode}`);
        
        try {
          const responseData = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(responseData);
          } else {
            reject({
              statusCode: res.statusCode,
              data: responseData
            });
          }
        } catch (error) {
          reject({
            statusCode: res.statusCode,
            data: data,
            error: error.message
          });
        }
      });
    });
    
    req.on('error', (error) => {
      reject({
        error: error.message
      });
    });
    
    req.write(requestBody);
    req.end();
  });
};

// Execute the request
makeRequest()
  .then((response) => {
    console.log('Address created successfully:');
    console.log(JSON.stringify(response, null, 2));
  })
  .catch((error) => {
    console.error('Error creating address:');
    console.error(JSON.stringify(error, null, 2));
    process.exit(1);
  });
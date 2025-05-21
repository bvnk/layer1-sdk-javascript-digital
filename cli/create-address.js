#!/usr/bin/env node

/**
 * CLI tool to test address creation with Layer1 API
 */

import ApiClient from '../src/com.layer1.clients.digital.invoker/ApiClient.js';
import AddressApi from '../src/com.layer1.clients.digital.invoker/com.layer1.clients.digital.api/AddressApi.js';
import CreateAddressRequest from '../src/com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateAddressRequest.js';
import Layer1ApiClient from '../src/com.layer1.clients.digital.auth/Layer1ApiClient.js';
import fs from 'fs';
import path from 'path';

// Parse command line arguments
const args = process.argv.slice(2);
const helpText = `
Usage: node create-address.js [options]

Options:
  --client-id <id>       Client ID for authentication (required)
  --private-key <path>   Path to private key file (required)
  --asset-pool-id <id>   Asset pool ID (required)
  --network <network>    Network (required, e.g., ETHEREUM)
  --reference <ref>      Reference (required)
  --base-path <url>      API base path (default: https://api.staging.layer1.com)
  --help                 Show this help message

Example:
  node create-address.js --client-id 20ff4e7d-8f1f-499f-8720-365a73e6f1f5 \\
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

// Create API client with authentication
const apiClient = new Layer1ApiClient(options.clientId, privateKey, options.basePath);

// Create address request
const addressRequest = new CreateAddressRequest();
addressRequest.assetPoolId = options.assetPoolId;
addressRequest.network = options.network;
addressRequest.reference = options.reference;

// Create address API instance
const addressApi = new AddressApi(apiClient);

// Call create address API
console.log('Creating address...');
console.log('Request:', JSON.stringify(addressRequest, null, 2));

addressApi.createAddress(addressRequest, (error, data, response) => {
  if (error) {
    console.error('Error creating address:');
    console.error(error);
    process.exit(1);
  } else {
    console.log('Address created successfully:');
    console.log(JSON.stringify(data, null, 2));
  }
});
/**
 * Layer1 Digest Authentication
 * Implementation of RFC 9421 authentication for Layer1 API
 */

import crypto from 'crypto';

/**
 * Layer1Digest class for handling RFC 9421 authentication
 */
export default class Layer1Digest {
  /**
   * Creates a new Layer1Digest instance
   * 
   * @param {string} signingPrivateKey - Base64 encoded private key
   * @param {string} clientId - OAuth2 Client ID
   */
  constructor(signingPrivateKey, clientId) {
    this.clientId = clientId;
    this.signingKey = this.prepareKey(signingPrivateKey);
  }

  /**
   * Build the necessary signature headers
   * 
   * @param {string} url - The full URL of the request
   * @param {string} payload - The body of the request (if any)
   * @param {string} method - The HTTP method of the request
   * @returns {Object} - A map of headers
   */
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

  /**
   * Create the signature base string
   * 
   * @param {string} method - The HTTP method
   * @param {string} url - The full URL
   * @param {string} contentDigest - The content digest (if any)
   * @param {string} signatureParameters - The signature parameters
   * @returns {string} - The signature base string
   */
  createSignatureBase(method, url, contentDigest, signatureParameters) {
    return `"@method": ${method.toUpperCase()}\n"@target-uri": ${url}\n${
      contentDigest ? `"content-digest": ${contentDigest}\n` : ''
    }"@signature-params": ${signatureParameters}`;
  }

  /**
   * Sign the request using SHA256withRSA
   * 
   * @param {string} signatureBase - The signature base string
   * @returns {string} - The base64 encoded signature
   */
  sign(signatureBase) {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(signatureBase);
    sign.end();
    return sign.sign(this.signingKey, 'base64');
  }

  /**
   * Create the RFC 9421 signature parameters
   * 
   * @param {string} contentDigest - The content digest (if any)
   * @returns {string} - The signature parameters
   */
  createSignatureParameters(contentDigest) {
    const components = ['"@method"', '"@target-uri"'];
    if (contentDigest) {
      components.push('"content-digest"');
    }
    
    const created = Math.floor(Date.now() / 1000);
    return `(${components.join(' ')});created=${created};keyid="${this.clientId}";alg="rsa-v1_5-sha256"`;
  }

  /**
   * Create and prepare the digest for the request
   * 
   * @param {string} digestAlgorithm - The digest algorithm to use
   * @param {string} data - The data to digest
   * @returns {string} - The formatted digest
   */
  createDigest(digestAlgorithm, data) {
    const hash = crypto.createHash(digestAlgorithm.replace('sha-', 'sha'));
    hash.update(data);
    const digest = hash.digest('base64');
    return `${digestAlgorithm}=:${digest}:`;
  }

  /**
   * Remove the header and footer from the private key
   * 
   * @param {string} rawKey - The raw private key
   * @returns {string} - The prepared private key
   */
  prepareKey(rawKey) {
    let newKey = rawKey.replace('-----BEGIN PRIVATE KEY-----', '');
    newKey = newKey.replace('-----END PRIVATE KEY-----', '');
    newKey = newKey.replace(/\s+/g, '');
    
    // Return the key with proper PEM format
    return `-----BEGIN PRIVATE KEY-----\n${newKey}\n-----END PRIVATE KEY-----`;
  }
}
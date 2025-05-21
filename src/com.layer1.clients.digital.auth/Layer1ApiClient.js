/**
 * Layer1 API Client Wrapper
 * Wrapper for ApiClient that adds RFC 9421 authentication
 */

import ApiClient from '../com.layer1.clients.digital.invoker/ApiClient';
import Layer1Digest from './Layer1Digest';

/**
 * Layer1ApiClient class for wrapping the ApiClient with RFC 9421 authentication
 */
export default class Layer1ApiClient extends ApiClient {
  /**
   * Creates a new Layer1ApiClient instance
   * 
   * @param {string} clientId - OAuth2 Client ID
   * @param {string} privateKey - Private key for signing requests
   * @param {string} basePath - Base URL for API requests
   */
  constructor(clientId, privateKey, basePath) {
    super(basePath);
    this.layer1Digest = new Layer1Digest(privateKey, clientId);
  }

  /**
   * Override callApi method to add RFC 9421 authentication headers
   */
  callApi(path, httpMethod, pathParams,
    queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
    returnType, apiBasePath, callback) {

    // Build the full URL
    const url = this.buildUrl(path, pathParams, apiBasePath);
    
    // Convert bodyParam to string if it's an object
    let bodyStr = '';
    if (bodyParam) {
      bodyStr = typeof bodyParam === 'string' ? bodyParam : JSON.stringify(bodyParam);
    }

    // Get authentication headers
    const authHeaders = this.layer1Digest.buildHeaders(url, bodyStr, httpMethod);
    
    // Add authentication headers to the request
    Object.assign(headerParams, authHeaders);

    // Call the parent method with the updated headers
    return super.callApi(
      path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam,
      authNames, contentTypes, accepts, returnType, apiBasePath, callback
    );
  }
}
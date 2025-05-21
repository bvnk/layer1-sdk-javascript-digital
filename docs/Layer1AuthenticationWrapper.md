# Layer1 SDK Authentication Wrapper

This document explains how to use the Layer1 SDK with the RFC 9421 authentication wrapper.

## Overview

The Layer1 SDK requires RFC 9421 authentication headers for API requests. This wrapper provides a simple way to add these headers to your requests.

## Installation

```bash
# Install the Layer1 SDK
npm install @layer1/digital-sdk

# Install required dependencies
npm install crypto
```

## Usage

### Basic Usage

```javascript
import { AddressApi, CreateAddressRequest } from '@layer1/digital-sdk';
import Layer1ApiClient from '@layer1/digital-sdk/auth/Layer1ApiClient';

// Initialize the client with your credentials
const clientId = 'your-client-id';
const privateKey = `-----BEGIN PRIVATE KEY-----
...your private key...
-----END PRIVATE KEY-----`;
const basePath = 'https://api.staging.layer1.com'; // or your preferred API endpoint

// Create the API client with authentication
const apiClient = new Layer1ApiClient(clientId, privateKey, basePath);

// Create an API instance with the authenticated client
const addressApi = new AddressApi(apiClient);

// Use the API as normal
const addressRequest = new CreateAddressRequest();
addressRequest.assetPoolId = 'your-asset-pool-id';
addressRequest.network = 'ETHEREUM';
addressRequest.reference = 'your-reference';

addressApi.createAddress(addressRequest, (error, data, response) => {
  if (error) {
    console.error('Error creating address:', error);
  } else {
    console.log('Address created successfully:', data);
  }
});
```

### Using Promises

You can also use promises with the SDK:

```javascript
// Create a promise wrapper for the API call
function createAddressPromise(addressRequest) {
  return new Promise((resolve, reject) => {
    addressApi.createAddress(addressRequest, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Use the promise
async function createNewAddress() {
  try {
    const address = await createAddressPromise(addressRequest);
    console.log('Address created:', address);
  } catch (error) {
    console.error('Error:', error);
  }
}

createNewAddress();
```

## Authentication Details

The wrapper handles the following RFC 9421 authentication requirements:

1. Generating the `Content-Digest` header for request bodies
2. Creating the `Signature-Input` header with the required components
3. Signing the request with your private key
4. Adding the `Signature` header with the signature

All of this is handled automatically when you use the `Layer1ApiClient` class.

## CLI Tool

A CLI tool is included to test the SDK:

```bash
node cli/create-address.js --client-id your-client-id \
  --private-key path/to/private-key.pem \
  --asset-pool-id your-asset-pool-id \
  --network ETHEREUM \
  --reference your-reference
```

## Advanced Configuration

You can customize the authentication behavior by extending the `Layer1Digest` class:

```javascript
import Layer1Digest from '@layer1/digital-sdk/auth/Layer1Digest';

class CustomDigest extends Layer1Digest {
  // Override methods as needed
}

// Use your custom digest class with the API client
const customDigest = new CustomDigest(privateKey, clientId);
apiClient.layer1Digest = customDigest;
```
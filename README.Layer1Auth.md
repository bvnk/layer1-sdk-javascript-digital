# Layer1 SDK with RFC 9421 Authentication

This repository contains an implementation of RFC 9421 authentication for the Layer1 SDK.

## Overview

The Layer1 SDK requires RFC 9421 authentication headers for API requests. This implementation provides:

1. A `Layer1Digest` class that handles the creation of RFC 9421 authentication headers
2. A `Layer1ApiClient` class that extends the generated SDK's `ApiClient` to automatically add authentication headers
3. A CLI tool to test the implementation

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/layer1-sdk-javascript-digital.git
cd layer1-sdk-javascript-digital

# Install dependencies
npm install
```

## Usage

### Using the Layer1ApiClient

```javascript
import { AddressApi, CreateAddressRequest } from '@layer1/digital-sdk';
import Layer1ApiClient from './src/com.layer1.clients.digital.auth/Layer1ApiClient';

// Initialize the client with your credentials
const clientId = 'your-client-id';
const privateKey = `-----BEGIN PRIVATE KEY-----
...your private key...
-----END PRIVATE KEY-----`;
const basePath = 'https://api.staging.layer1.com';

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

### Using the Layer1Digest Directly

If you want to use the `Layer1Digest` class directly:

```javascript
import Layer1Digest from './src/com.layer1.clients.digital.auth/Layer1Digest';
import https from 'https';

// Initialize the digest with your credentials
const clientId = 'your-client-id';
const privateKey = `-----BEGIN PRIVATE KEY-----
...your private key...
-----END PRIVATE KEY-----`;

const layer1Digest = new Layer1Digest(privateKey, clientId);

// Create the request
const url = 'https://api.staging.layer1.com/digital/v1/addresses';
const method = 'POST';
const payload = JSON.stringify({
  assetPoolId: 'your-asset-pool-id',
  network: 'ETHEREUM',
  reference: 'your-reference'
});

// Get the authentication headers
const authHeaders = layer1Digest.buildHeaders(url, payload, method);

// Make the request with the authentication headers
const requestOptions = {
  method,
  headers: {
    'Content-Type': 'application/json',
    ...authHeaders
  }
};

// Use your preferred HTTP client to make the request
```

## CLI Tool

We've included a CLI tool to test the implementation:

```bash
# Run the CLI tool
node cli/simple-create-address.js --client-id your-client-id \
  --private-key path/to/private-key.pem \
  --asset-pool-id your-asset-pool-id \
  --network ETHEREUM \
  --reference your-reference
```

## Documentation

For more detailed documentation, see:

- [RFC 9421 Authentication](./docs/RFC9421Authentication.md)
- [Layer1 Authentication Wrapper](./docs/Layer1AuthenticationWrapper.md)

## Files

- `src/com.layer1.clients.digital.auth/Layer1Digest.js`: Implementation of RFC 9421 authentication
- `src/com.layer1.clients.digital.auth/Layer1ApiClient.js`: Wrapper for the SDK's ApiClient
- `cli/simple-create-address.js`: CLI tool to test the implementation
- `cli/private-key.pem`: Example private key for testing

## Testing

We've successfully tested the implementation with the provided credentials:

- Client ID: `20ff4e7d-8f1f-499f-8720-365a73e6f1f5`
- Asset Pool ID: `14a066e3-00d4-4b68-b8ee-37d385a32ad9`

The test created an Ethereum address with the reference "my-user-id".

## Security Considerations

- Store your private key securely
- Do not hardcode credentials in your application
- Use environment variables or a secure key management system
- Consider implementing key rotation policies
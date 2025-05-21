# RFC 9421 Authentication for Layer1 SDK

This document explains how to use the RFC 9421 authentication with the Layer1 SDK.

## Overview

The Layer1 SDK requires RFC 9421 authentication headers for API requests. We've implemented two approaches:

1. A wrapper client (`Layer1ApiClient`) that extends the generated SDK's `ApiClient`
2. A standalone authentication class (`Layer1Digest`) that can be used independently

## Implementation Details

### Layer1Digest Class

The `Layer1Digest` class handles the creation of RFC 9421 authentication headers:

- Generates the `Content-Digest` header for request bodies
- Creates the `Signature-Input` header with the required components
- Signs the request with your private key
- Adds the `Signature` header with the signature

```javascript
import Layer1Digest from './Layer1Digest';

const digest = new Layer1Digest(privateKey, clientId);
const headers = digest.buildHeaders(url, payload, method);
```

### Layer1ApiClient Class

The `Layer1ApiClient` class extends the generated SDK's `ApiClient` to automatically add authentication headers:

```javascript
import Layer1ApiClient from './Layer1ApiClient';
import { AddressApi } from '@layer1/digital-sdk';

const apiClient = new Layer1ApiClient(clientId, privateKey, basePath);
const addressApi = new AddressApi(apiClient);

// Use the API as normal
addressApi.createAddress(addressRequest, callback);
```

## Testing

We've successfully tested the implementation with the provided credentials:

- Client ID: `20ff4e7d-8f1f-499f-8720-365a73e6f1f5`
- Asset Pool ID: `14a066e3-00d4-4b68-b8ee-37d385a32ad9`

The test created an Ethereum address with the reference "my-user-id".

## CLI Tool

We've included a CLI tool to test the implementation:

```bash
node cli/simple-create-address.js --client-id 20ff4e7d-8f1f-499f-8720-365a73e6f1f5 \
  --private-key ./cli/private-key.pem \
  --asset-pool-id 14a066e3-00d4-4b68-b8ee-37d385a32ad9 \
  --network ETHEREUM \
  --reference my-user-id
```

## Example Response

A successful address creation returns:

```json
{
  "id": "b3841bb2-ba1c-422b-bc95-3f6ac2a35dd5",
  "address": "0xaeb5337352d3a9f3d70d29c8b0b320a243d9ada1",
  "assetPoolId": "14a066e3-00d4-4b68-b8ee-37d385a32ad9",
  "network": "ETHEREUM",
  "keyPairId": "77fb5890-f2a7-4b7b-bfb8-82e0c960db6c",
  "reference": "my-user-id",
  "supportedAssets": [
    "ETH",
    "USDT",
    "DAI",
    "PYUSD",
    "FDUSD",
    "WLD",
    "SHIB",
    "LINK",
    "USDC"
  ],
  "master": false
}
```

## Integration Guide

To integrate the RFC 9421 authentication into your application:

1. Install the Layer1 SDK
2. Copy the `Layer1Digest.js` and `Layer1ApiClient.js` files to your project
3. Use the `Layer1ApiClient` class when creating API instances
4. Configure with your client ID and private key

```javascript
import { AddressApi } from '@layer1/digital-sdk';
import Layer1ApiClient from './Layer1ApiClient';

const apiClient = new Layer1ApiClient(
  'your-client-id',
  'your-private-key',
  'https://api.staging.layer1.com'
);

const addressApi = new AddressApi(apiClient);
```

## Security Considerations

- Store your private key securely
- Do not hardcode credentials in your application
- Use environment variables or a secure key management system
- Consider implementing key rotation policies
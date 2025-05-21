# DigitalAsset.KeyPairApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKeyPair**](KeyPairApi.md#createKeyPair) | **POST** /digital/v1/key-pairs | Create key pair
[**getKeyPair**](KeyPairApi.md#getKeyPair) | **GET** /digital/v1/key-pairs/{keyPairId} | Get key pair
[**listKeyPairs**](KeyPairApi.md#listKeyPairs) | **GET** /digital/v1/key-pairs | List key pairs



## createKeyPair

> KeyPair createKeyPair(createKeyPairRequest)

Create key pair

Creates a new key pair from which different addresses can be created

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.KeyPairApi();
let createKeyPairRequest = new DigitalAsset.CreateKeyPairRequest(); // CreateKeyPairRequest | 
apiInstance.createKeyPair(createKeyPairRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createKeyPairRequest** | [**CreateKeyPairRequest**](CreateKeyPairRequest.md)|  | 

### Return type

[**KeyPair**](KeyPair.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getKeyPair

> KeyPair getKeyPair(keyPairId)

Get key pair

Retrieve a key pair given id

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.KeyPairApi();
let keyPairId = "keyPairId_example"; // String | 
apiInstance.getKeyPair(keyPairId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyPairId** | **String**|  | 

### Return type

[**KeyPair**](KeyPair.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listKeyPairs

> PaginatedResultKeyPair listKeyPairs(assetPoolId, pageNumber, pageSize)

List key pairs

Retrieve paginated list of key-pairs belonging to a asset pool

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.KeyPairApi();
let assetPoolId = "assetPoolId_example"; // String | 
let pageNumber = 0; // Number | 
let pageSize = 64; // Number | 
apiInstance.listKeyPairs(assetPoolId, pageNumber, pageSize, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetPoolId** | **String**|  | 
 **pageNumber** | **Number**|  | [default to 0]
 **pageSize** | **Number**|  | [default to 64]

### Return type

[**PaginatedResultKeyPair**](PaginatedResultKeyPair.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# DigitalAsset.TransactionRequestApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStakingTransaction**](TransactionRequestApi.md#createStakingTransaction) | **POST** /digital/v1/staking-requests | Create staking transaction request
[**createTransaction**](TransactionRequestApi.md#createTransaction) | **POST** /digital/v1/transaction-requests | Create transaction request
[**getTransactionRequestById**](TransactionRequestApi.md#getTransactionRequestById) | **GET** /digital/v1/transaction-requests/{requestId} | Get transaction request
[**listTransactionRequests**](TransactionRequestApi.md#listTransactionRequests) | **GET** /digital/v1/transaction-requests | List transaction requests



## createStakingTransaction

> TransactionRequest createStakingTransaction(createStakingTransactionRequest)

Create staking transaction request

Create a new blockchain staking transaction

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionRequestApi();
let createStakingTransactionRequest = new DigitalAsset.CreateStakingTransactionRequest(); // CreateStakingTransactionRequest | 
apiInstance.createStakingTransaction(createStakingTransactionRequest, (error, data, response) => {
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
 **createStakingTransactionRequest** | [**CreateStakingTransactionRequest**](CreateStakingTransactionRequest.md)|  | 

### Return type

[**TransactionRequest**](TransactionRequest.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTransaction

> TransactionRequest createTransaction(createTransactionRequest)

Create transaction request

Create a new blockchain transaction

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionRequestApi();
let createTransactionRequest = new DigitalAsset.CreateTransactionRequest(); // CreateTransactionRequest | 
apiInstance.createTransaction(createTransactionRequest, (error, data, response) => {
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
 **createTransactionRequest** | [**CreateTransactionRequest**](CreateTransactionRequest.md)|  | 

### Return type

[**TransactionRequest**](TransactionRequest.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionRequestById

> TransactionRequest getTransactionRequestById(requestId)

Get transaction request

Get transaction request by id

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionRequestApi();
let requestId = "requestId_example"; // String | 
apiInstance.getTransactionRequestById(requestId, (error, data, response) => {
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
 **requestId** | **String**|  | 

### Return type

[**TransactionRequest**](TransactionRequest.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransactionRequests

> PaginatedResultTransactionRequest listTransactionRequests(assetPoolId, pageNumber, pageSize, opts)

List transaction requests

Retrieve paginated list of transaction requests

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionRequestApi();
let assetPoolId = "assetPoolId_example"; // String | asset pool id
let pageNumber = 0; // Number | current page number
let pageSize = 50; // Number | number of items in a page
let opts = {
  'q': "q_example" // String | Query in lucene like format, e.g. reference:REF-12a1. Supported properties: reference, type
};
apiInstance.listTransactionRequests(assetPoolId, pageNumber, pageSize, opts, (error, data, response) => {
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
 **assetPoolId** | **String**| asset pool id | 
 **pageNumber** | **Number**| current page number | [default to 0]
 **pageSize** | **Number**| number of items in a page | [default to 50]
 **q** | **String**| Query in lucene like format, e.g. reference:REF-12a1. Supported properties: reference, type | [optional] 

### Return type

[**PaginatedResultTransactionRequest**](PaginatedResultTransactionRequest.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


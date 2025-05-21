# DigitalAsset.TransactionApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claimTransaction**](TransactionApi.md#claimTransaction) | **POST** /digital/v1/transaction-claims | Claim blockchain transaction
[**getTransactionById**](TransactionApi.md#getTransactionById) | **GET** /digital/v1/transactions/{transactionId} | Get transaction
[**listTransactions**](TransactionApi.md#listTransactions) | **GET** /digital/v1/transactions | List transactions



## claimTransaction

> claimTransaction(transactionClaimRequest)

Claim blockchain transaction

Claim an existing blockchain transaction

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionApi();
let transactionClaimRequest = new DigitalAsset.TransactionClaimRequest(); // TransactionClaimRequest | 
apiInstance.claimTransaction(transactionClaimRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionClaimRequest** | [**TransactionClaimRequest**](TransactionClaimRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionById

> Transaction getTransactionById(transactionId)

Get transaction

Get transaction by id

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionApi();
let transactionId = "transactionId_example"; // String | 
apiInstance.getTransactionById(transactionId, (error, data, response) => {
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
 **transactionId** | **String**|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTransactions

> PaginatedResultTransaction listTransactions(assetPoolId, pageNumber, pageSize, opts)

List transactions

Retrieve paginated list of transactions

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.TransactionApi();
let assetPoolId = "assetPoolId_example"; // String | asset pool id
let pageNumber = 0; // Number | current page number
let pageSize = 50; // Number | number of items in a page
let opts = {
  'q': "q_example" // String | Query in lucene like format, e.g. hash:0x012a1. Supported properties: hash, reference, customerId, from, to. If time bounds are not provided default are applied
};
apiInstance.listTransactions(assetPoolId, pageNumber, pageSize, opts, (error, data, response) => {
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
 **q** | **String**| Query in lucene like format, e.g. hash:0x012a1. Supported properties: hash, reference, customerId, from, to. If time bounds are not provided default are applied | [optional] 

### Return type

[**PaginatedResultTransaction**](PaginatedResultTransaction.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


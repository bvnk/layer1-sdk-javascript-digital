# DigitalAsset.ReturnApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReturnTransactionRequest**](ReturnApi.md#createReturnTransactionRequest) | **POST** /digital/v1/returns | Create return transaction request



## createReturnTransactionRequest

> TransactionRequest createReturnTransactionRequest(returnRequest)

Create return transaction request

Create a new blockchain transaction meant to return previously deposited funds

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.ReturnApi();
let returnRequest = new DigitalAsset.ReturnRequest(); // ReturnRequest | 
apiInstance.createReturnTransactionRequest(returnRequest, (error, data, response) => {
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
 **returnRequest** | [**ReturnRequest**](ReturnRequest.md)|  | 

### Return type

[**TransactionRequest**](TransactionRequest.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


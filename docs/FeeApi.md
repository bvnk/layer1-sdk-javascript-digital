# DigitalAsset.FeeApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**estimateTransactionFee**](FeeApi.md#estimateTransactionFee) | **POST** /digital/v1/fee-estimate | Estimate transaction fee



## estimateTransactionFee

> AssetValue estimateTransactionFee(estimateTransactionFeeRequest)

Estimate transaction fee

Estimate fee to send blockchain transaction

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.FeeApi();
let estimateTransactionFeeRequest = new DigitalAsset.EstimateTransactionFeeRequest(); // EstimateTransactionFeeRequest | 
apiInstance.estimateTransactionFee(estimateTransactionFeeRequest, (error, data, response) => {
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
 **estimateTransactionFeeRequest** | [**EstimateTransactionFeeRequest**](EstimateTransactionFeeRequest.md)|  | 

### Return type

[**AssetValue**](AssetValue.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# DigitalAsset.NetworkApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworks**](NetworkApi.md#getNetworks) | **GET** /digital/v1/networks | Get all networks



## getNetworks

> [Network] getNetworks(opts)

Get all networks

Get all supported networks and their assets. By default, only enabled networks are returned.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.NetworkApi();
let opts = {
  'includeDisabled': false // Boolean | Include disabled networks in the response
};
apiInstance.getNetworks(opts, (error, data, response) => {
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
 **includeDisabled** | **Boolean**| Include disabled networks in the response | [optional] [default to false]

### Return type

[**[Network]**](Network.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


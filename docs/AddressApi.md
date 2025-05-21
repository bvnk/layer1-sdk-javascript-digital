# DigitalAsset.AddressApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddress**](AddressApi.md#createAddress) | **POST** /digital/v1/addresses | Create a new address
[**getAddress**](AddressApi.md#getAddress) | **GET** /digital/v1/addresses/{addressId} | Get address
[**listAddresses**](AddressApi.md#listAddresses) | **GET** /digital/v1/addresses | List addresses
[**listTags**](AddressApi.md#listTags) | **GET** /digital/v1/addresses/{addressId}/tags | List address tags
[**validateAddress**](AddressApi.md#validateAddress) | **POST** /digital/v1/addresses/validate | Validate address



## createAddress

> Address createAddress(createAddressRequest)

Create a new address

Creates a new address

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AddressApi();
let createAddressRequest = new DigitalAsset.CreateAddressRequest(); // CreateAddressRequest | 
apiInstance.createAddress(createAddressRequest, (error, data, response) => {
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
 **createAddressRequest** | [**CreateAddressRequest**](CreateAddressRequest.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAddress

> [Address] getAddress(addressId)

Get address

Retrieve select address details

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AddressApi();
let addressId = "addressId_example"; // String | 
apiInstance.getAddress(addressId, (error, data, response) => {
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
 **addressId** | **String**|  | 

### Return type

[**[Address]**](Address.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddresses

> PaginatedResultAddress listAddresses(assetPoolId, pageNumber, pageSize, opts)

List addresses

Retrieve paginated list of addresses

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AddressApi();
let assetPoolId = "assetPoolId_example"; // String | 
let pageNumber = 0; // Number | 
let pageSize = 64; // Number | 
let opts = {
  'q': "q_example" // String | Query in lucene format. Supported fields: reference, customerId
};
apiInstance.listAddresses(assetPoolId, pageNumber, pageSize, opts, (error, data, response) => {
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
 **q** | **String**| Query in lucene format. Supported fields: reference, customerId | [optional] 

### Return type

[**PaginatedResultAddress**](PaginatedResultAddress.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTags

> PaginatedResultAddress listTags(addressId, pageNumber, pageSize)

List address tags

Retrieve paginated list of address tags

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AddressApi();
let addressId = "addressId_example"; // String | 
let pageNumber = 0; // Number | 
let pageSize = 64; // Number | 
apiInstance.listTags(addressId, pageNumber, pageSize, (error, data, response) => {
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
 **addressId** | **String**|  | 
 **pageNumber** | **Number**|  | [default to 0]
 **pageSize** | **Number**|  | [default to 64]

### Return type

[**PaginatedResultAddress**](PaginatedResultAddress.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateAddress

> ValidateAddressResponse validateAddress(validateAddressRequest)

Validate address

Validate a blockchain address

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AddressApi();
let validateAddressRequest = new DigitalAsset.ValidateAddressRequest(); // ValidateAddressRequest | 
apiInstance.validateAddress(validateAddressRequest, (error, data, response) => {
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
 **validateAddressRequest** | [**ValidateAddressRequest**](ValidateAddressRequest.md)|  | 

### Return type

[**ValidateAddressResponse**](ValidateAddressResponse.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


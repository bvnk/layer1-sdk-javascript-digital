# DigitalAsset.AssetPoolApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssetPool**](AssetPoolApi.md#createAssetPool) | **POST** /digital/v1/asset-pools | Create asset pool
[**deleteAssetPool**](AssetPoolApi.md#deleteAssetPool) | **DELETE** /digital/v1/asset-pools/{assetPoolId} | Delete asset pool
[**getAssetPool**](AssetPoolApi.md#getAssetPool) | **GET** /digital/v1/asset-pools/{assetPoolId} | Get asset pool
[**getAssetPoolBalance**](AssetPoolApi.md#getAssetPoolBalance) | **GET** /digital/v1/asset-pools/{assetPoolId}/balances | Get asset pool balance
[**getAssetPoolMaxWithdrawableAmount**](AssetPoolApi.md#getAssetPoolMaxWithdrawableAmount) | **GET** /digital/v1/asset-pools/{assetPoolId}/max-withdrawable-amount | Get max asset pool withdrawable balance
[**getAssetPoolSummary**](AssetPoolApi.md#getAssetPoolSummary) | **GET** /digital/v1/asset-pools/summary | Get asset pool summary
[**listAssetPools**](AssetPoolApi.md#listAssetPools) | **GET** /digital/v1/asset-pools | List asset pools
[**updateAssetPool**](AssetPoolApi.md#updateAssetPool) | **PATCH** /digital/v1/asset-pools/{assetPoolId} | Update asset pool



## createAssetPool

> String createAssetPool(createAssetPoolRequest)

Create asset pool

Creates a new asset pool which serves as a collection of assets

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let createAssetPoolRequest = new DigitalAsset.CreateAssetPoolRequest(); // CreateAssetPoolRequest | 
apiInstance.createAssetPool(createAssetPoolRequest, (error, data, response) => {
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
 **createAssetPoolRequest** | [**CreateAssetPoolRequest**](CreateAssetPoolRequest.md)|  | 

### Return type

**String**

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAssetPool

> deleteAssetPool(assetPoolId)

Delete asset pool

Delete asset pool with given id if it has not addresses nor transactions created

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let assetPoolId = "assetPoolId_example"; // String | 
apiInstance.deleteAssetPool(assetPoolId, (error, data, response) => {
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
 **assetPoolId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPool

> String getAssetPool(assetPoolId)

Get asset pool

Retrieve a specific asset pool given id

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let assetPoolId = "assetPoolId_example"; // String | 
apiInstance.getAssetPool(assetPoolId, (error, data, response) => {
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

### Return type

**String**

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPoolBalance

> Balance getAssetPoolBalance(assetPoolId, network, asset)

Get asset pool balance

Retrieve an asset pool balance for specific network and asset

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let assetPoolId = "assetPoolId_example"; // String | 
let network = "network_example"; // String | 
let asset = "asset_example"; // String | 
apiInstance.getAssetPoolBalance(assetPoolId, network, asset, (error, data, response) => {
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
 **network** | **String**|  | 
 **asset** | **String**|  | 

### Return type

[**Balance**](Balance.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPoolMaxWithdrawableAmount

> Balance getAssetPoolMaxWithdrawableAmount(assetPoolId, network, asset)

Get max asset pool withdrawable balance

Retrieve maximal approximate (does not take fees into account) amount withdrawable for specific network and asset

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let assetPoolId = "assetPoolId_example"; // String | 
let network = "network_example"; // String | 
let asset = "asset_example"; // String | 
apiInstance.getAssetPoolMaxWithdrawableAmount(assetPoolId, network, asset, (error, data, response) => {
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
 **network** | **String**|  | 
 **asset** | **String**|  | 

### Return type

[**Balance**](Balance.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetPoolSummary

> AssetPoolSummary getAssetPoolSummary()

Get asset pool summary

Retrieve authenticated summary across all asset pools.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
apiInstance.getAssetPoolSummary((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetPoolSummary**](AssetPoolSummary.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssetPools

> listAssetPools(pageNumber, pageSize)

List asset pools

Retrieve paginated list of asset pools

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let pageNumber = 0; // Number | 
let pageSize = 64; // Number | 
apiInstance.listAssetPools(pageNumber, pageSize, (error, data, response) => {
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
 **pageNumber** | **Number**|  | [default to 0]
 **pageSize** | **Number**|  | [default to 64]

### Return type

null (empty response body)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAssetPool

> String updateAssetPool(assetPoolId, updateAssetPoolRequest)

Update asset pool

Update an asset pool

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.AssetPoolApi();
let assetPoolId = "assetPoolId_example"; // String | 
let updateAssetPoolRequest = new DigitalAsset.UpdateAssetPoolRequest(); // UpdateAssetPoolRequest | 
apiInstance.updateAssetPool(assetPoolId, updateAssetPoolRequest, (error, data, response) => {
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
 **updateAssetPoolRequest** | [**UpdateAssetPoolRequest**](UpdateAssetPoolRequest.md)|  | 

### Return type

**String**

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# DigitalAsset.ExportApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBalanceExport**](ExportApi.md#createBalanceExport) | **POST** /digital/v1/exports | Create a balance export
[**getExport**](ExportApi.md#getExport) | **GET** /digital/v1/exports/{id} | Get export with a download link
[**getExports**](ExportApi.md#getExports) | **GET** /digital/v1/exports | List all exports



## createBalanceExport

> createBalanceExport(createBalanceExportRequest)

Create a balance export

Initiates a job to export balance data in the CSV format.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.ExportApi();
let createBalanceExportRequest = new DigitalAsset.CreateBalanceExportRequest(); // CreateBalanceExportRequest | 
apiInstance.createBalanceExport(createBalanceExportRequest, (error, data, response) => {
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
 **createBalanceExportRequest** | [**CreateBalanceExportRequest**](CreateBalanceExportRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExport

> Export getExport(id)

Get export with a download link

Retrieves export details with a short-lived download link by its ID.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.ExportApi();
let id = "id_example"; // String | The ID of the export to retrieve
apiInstance.getExport(id, (error, data, response) => {
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
 **id** | **String**| The ID of the export to retrieve | 

### Return type

[**Export**](Export.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExports

> [PaginatedExports] getExports(type, pageNumber, pageSize)

List all exports

Retrieves a paginated list of exports based on type and pagination settings.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.ExportApi();
let type = ["null"]; // [String] | Filter exports by type
let pageNumber = 0; // Number | 
let pageSize = 16; // Number | 
apiInstance.getExports(type, pageNumber, pageSize, (error, data, response) => {
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
 **type** | [**[String]**](String.md)| Filter exports by type | 
 **pageNumber** | **Number**|  | [default to 0]
 **pageSize** | **Number**|  | [default to 16]

### Return type

[**[PaginatedExports]**](PaginatedExports.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


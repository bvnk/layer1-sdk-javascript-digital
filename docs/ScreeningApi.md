# DigitalAsset.ScreeningApi

All URIs are relative to *https://api.staging.layer1.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listScreenings**](ScreeningApi.md#listScreenings) | **GET** /digital/v1/screenings | List screening results
[**manuallyActionHeldTransfer**](ScreeningApi.md#manuallyActionHeldTransfer) | **PUT** /digital/v1/screenings/action | Approve or reject a held transfer



## listScreenings

> PaginatedScreenings listScreenings(pageNumber, pageSize, opts)

List screening results

Retrieves a paginated list of the most recent transfers along with their screening results.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.ScreeningApi();
let pageNumber = 0; // Number | 
let pageSize = 16; // Number | 
let opts = {
  'hash': "hash_example", // String | Filter by transaction hash
  'operation': ["null"], // [String] | Set of operations to filter by
  'state': ["null"], // [String] | Set of screening states to filter by
  'startDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date for filtering by transfer creation date
  'endDate': new Date("2013-10-20T19:20:30+01:00"), // Date | End date for filtering by transfer creation date
  'sort': "screeningId.transfer.id.createdAt,desc", // String | 
  'q': "notReasonCode:DUST_AMOUNT" // String | Query using Lucene-like syntax. Supported properties: notReasonCode, reasonCode, reason, hash, state, operation, from, to
};
apiInstance.listScreenings(pageNumber, pageSize, opts, (error, data, response) => {
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
 **pageNumber** | **Number**|  | [default to 0]
 **pageSize** | **Number**|  | [default to 16]
 **hash** | **String**| Filter by transaction hash | [optional] 
 **operation** | [**[String]**](String.md)| Set of operations to filter by | [optional] 
 **state** | [**[String]**](String.md)| Set of screening states to filter by | [optional] 
 **startDate** | **Date**| Start date for filtering by transfer creation date | [optional] 
 **endDate** | **Date**| End date for filtering by transfer creation date | [optional] 
 **sort** | **String**|  | [optional] [default to &#39;screeningId.transfer.id.createdAt,desc&#39;]
 **q** | **String**| Query using Lucene-like syntax. Supported properties: notReasonCode, reasonCode, reason, hash, state, operation, from, to | [optional] 

### Return type

[**PaginatedScreenings**](PaginatedScreenings.md)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## manuallyActionHeldTransfer

> manuallyActionHeldTransfer(manualActionRequest)

Approve or reject a held transfer

Approves or rejects a held transfer based on the provided transfer ID and the destination address ID. Deposits can be only approved.

### Example

```javascript
import DigitalAsset from 'digital_asset';
let defaultClient = DigitalAsset.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DigitalAsset.ScreeningApi();
let manualActionRequest = new DigitalAsset.ManualActionRequest(); // ManualActionRequest | 
apiInstance.manuallyActionHeldTransfer(manualActionRequest, (error, data, response) => {
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
 **manualActionRequest** | [**ManualActionRequest**](ManualActionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[httpSignature](../README.md#httpSignature), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


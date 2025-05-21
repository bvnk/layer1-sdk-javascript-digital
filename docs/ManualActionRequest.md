# DigitalAsset.ManualActionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Screening action to execute on the transfer | 
**operation** | **String** | Transaction type | 
**reason** | **String** | Reason for approving or rejecting the suspended transfer | 
**transferId** | **String** | Transfer identifier for which screening is performed | 
**addressId** | **String** | Specific destination address identifier for which screening is performed. Required only for deposits. | [optional] 



## Enum: ActionEnum


* `APPROVE` (value: `"APPROVE"`)

* `REJECT` (value: `"REJECT"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: OperationEnum


* `DEPOSIT` (value: `"DEPOSIT"`)

* `WITHDRAWAL` (value: `"WITHDRAWAL"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





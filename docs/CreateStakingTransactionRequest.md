# DigitalAsset.CreateStakingTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetPoolId** | **String** | asset pool id | [optional] 
**asset** | **String** | currency | [optional] 
**network** | **String** | crypto network | [optional] 
**type** | **String** |  | [optional] 
**reference** | **String** | custom identifier supplied for transaction that is used to link transaction to specific customer or use case | [optional] 
**address** | **String** | blockchain address | [optional] 
**amount** | **Object** |  | [optional] 
**metadata** | **{String: String}** |  | [optional] 



## Enum: TypeEnum


* `STAKE` (value: `"STAKE"`)

* `UNSTAKE` (value: `"UNSTAKE"`)

* `RELEASE` (value: `"RELEASE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





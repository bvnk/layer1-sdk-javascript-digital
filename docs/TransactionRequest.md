# DigitalAsset.TransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** | transaction request id | [optional] 
**asset** | **String** | currency | [optional] 
**assetPoolId** | **String** | asset pool id | [optional] 
**network** | **String** | crypto network | [optional] 
**reference** | **String** | custom identifier supplied for transaction that is used to link transaction to specific customer or use case | [optional] 
**status** | **String** | transaction request status | [optional] 
**sources** | [**[Participant]**](Participant.md) | requested list of addresses and amounts that fund the transaction | [optional] 
**destinations** | [**[Participant]**](Participant.md) | requested list of recipient addresses and amounts that benefit from the transaction | [optional] 
**type** | **String** | transaction request type | [optional] 
**createdAt** | **Date** | timestamp when transaction request was created | [optional] 
**updatedAt** | **Date** | timestamp when transaction request was updated | [optional] 
**failure** | [**Failure**](Failure.md) | failure details | [optional] 



## Enum: StatusEnum


* `BLOCKED` (value: `"BLOCKED"`)

* `CONFIRMED` (value: `"CONFIRMED"`)

* `CREATED` (value: `"CREATED"`)

* `DETECTED` (value: `"DETECTED"`)

* `FAILED` (value: `"FAILED"`)

* `FUNDS_RESERVED` (value: `"FUNDS_RESERVED"`)

* `HELD` (value: `"HELD"`)

* `REJECTED` (value: `"REJECTED"`)

* `SCREENING_PASSED` (value: `"SCREENING_PASSED"`)

* `SCREENING_REQUESTED` (value: `"SCREENING_REQUESTED"`)

* `SIGNED` (value: `"SIGNED"`)

* `SUCCESS` (value: `"SUCCESS"`)

* `UNCONFIRMED` (value: `"UNCONFIRMED"`)

* `REPLACED` (value: `"REPLACED"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: TypeEnum


* `DEPOSIT` (value: `"DEPOSIT"`)

* `WITHDRAWAL` (value: `"WITHDRAWAL"`)

* `CONSOLIDATION` (value: `"CONSOLIDATION"`)

* `RETURN` (value: `"RETURN"`)

* `STAKE` (value: `"STAKE"`)

* `UNSTAKE` (value: `"UNSTAKE"`)

* `DELEGATE` (value: `"DELEGATE"`)

* `UNDELEGATE` (value: `"UNDELEGATE"`)

* `RELEASE` (value: `"RELEASE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





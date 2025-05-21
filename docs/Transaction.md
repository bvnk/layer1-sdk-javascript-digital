# DigitalAsset.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | transaction id | [optional] 
**address** | [**Address**](Address.md) | address involved in the transaction | [optional] 
**reference** | **String** | custom identifier supplied for transaction that is used to link transaction to specific customer or use case | [optional] 
**status** | **String** | transaction status | [optional] 
**sources** | [**[Participant]**](Participant.md) | list of addresses and amounts that fund the transaction | [optional] 
**destinations** | [**[Participant]**](Participant.md) | list of recipient addresses and amounts that benefit from the transaction | [optional] 
**type** | **String** | transaction type | [optional] 
**asset** | **String** | currency | [optional] 
**amount** | **Object** |  | [optional] 
**hash** | **String** | blockchain transaction hash | [optional] 
**networkDetail** | [**NetworkDetail**](NetworkDetail.md) | network details of the transaction | [optional] 
**metadata** | [**TransactionMetadata**](TransactionMetadata.md) | metadata about the transaction | [optional] 
**createdAt** | **Date** | timestamp when transaction was created | [optional] 
**updatedAt** | **Date** | timestamp when transaction was updated | [optional] 



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





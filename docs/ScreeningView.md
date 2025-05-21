# DigitalAsset.ScreeningView

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique identifier of the transaction | [optional] 
**transactionHash** | **String** | Blockchain transaction hash | [optional] 
**transactionStatus** | **String** | Current status of the transaction | [optional] 
**network** | **String** | Network code used for the transaction | [optional] 
**transactionMetadata** | [**TransactionMetadata**](TransactionMetadata.md) | Transaction metadata in JSON format | [optional] 
**transactionCreatedAt** | **Date** | Timestamp when the transaction was created | [optional] 
**transactionUpdatedAt** | **Date** | Timestamp when the transaction was last updated | [optional] 
**screeningState** | **String** | Screening state of the transaction | [optional] 
**screeningReason** | **String** | Reason for the screening result | [optional] 
**screeningReasonCode** | **String** | Reason code for the screening result | [optional] 
**screeningCreatedAt** | **Date** | Timestamp when the screening was created | [optional] 
**screeningUpdatedAt** | **Date** | Timestamp when the screening was last updated | [optional] 
**screeningMetadata** | [**ScreeningMetadata**](ScreeningMetadata.md) | Screening metadata in JSON format | [optional] 
**participants** | [**[Participant]**](Participant.md) | List of participants involved in the transaction | [optional] 
**operation** | **String** | Operation type for the screening | [optional] 
**addressId** | **String** | Unique identifier of the address involved in the screening | [optional] 



## Enum: TransactionStatusEnum


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





## Enum: ScreeningStateEnum


* `APPROVED` (value: `"APPROVED"`)

* `REJECTED` (value: `"REJECTED"`)

* `PENDING_SCREENING` (value: `"PENDING_SCREENING"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: OperationEnum


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





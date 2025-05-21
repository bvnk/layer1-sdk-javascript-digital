# DigitalAsset.Export

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the export | [optional] 
**status** | **String** | Current status of the export job | [optional] 
**type** | **String** | Export type name | [optional] 
**inputParameters** | **{String: String}** | JSON string containing input parameters for the job | [optional] 
**filename** | **String** | Filename of the resulting export | [optional] 
**url** | **String** | URL for file download | [optional] 
**createdAt** | **Date** | Timestamp when the export was created | [optional] 
**updatedAt** | **Date** | Timestamp when the export was last updated | [optional] 



## Enum: StatusEnum


* `PROCESSING` (value: `"PROCESSING"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `FAILED` (value: `"FAILED"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





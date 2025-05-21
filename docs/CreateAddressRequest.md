# DigitalAsset.CreateAddressRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetPoolId** | **String** | asset pool id | [optional] 
**network** | **String** | crypto network | [optional] 
**asset** | **String** | crypto currency for which address(es) should be created. if network is not given will create addreses in all networks supporting given asset | [optional] 
**reference** | **String** | unique identifier for each destination that is receiving funds (whether tag or address). Similar to banking reference it is used to link deposit to a specific invoice | [optional] 
**customerId** | **String** | custom non-unique identifier supplied for address that is used to link address to external entity like customer, merchant, company, etc. | [optional] 



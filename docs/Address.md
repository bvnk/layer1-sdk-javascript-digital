# DigitalAsset.Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | internal id | [optional] 
**address** | **String** | blockchain address | [optional] 
**assetPoolId** | **String** | asset pool id | [optional] 
**network** | **String** | crypto network | [optional] 
**keyPairId** | **String** | key pair id | [optional] 
**reference** | **String** | key pair reference | [optional] 
**supportedAssets** | **[String]** | list of assets supported by network | [optional] 
**aliases** | **[String]** | alternative address (e.g. BTC has segwitt and legacy format) | [optional] 
**tag** | **String** | destination tag that serves as optional payment identifier. Only applicable to select networks like Ripple, Solana etc. | [optional] 
**balances** | [**[Balance]**](Balance.md) | address balances | [optional] 
**customerId** | **String** | custom non-unique identifier supplied for address that is used to link address to external entity like customer | [optional] 
**master** | **Boolean** | flag indicating whether this address is asset pool master address | [optional] 
**supportedNetworks** | **[String]** | list of networks supporting given asset. mutually exclusive with network and supportedAssets | [optional] 



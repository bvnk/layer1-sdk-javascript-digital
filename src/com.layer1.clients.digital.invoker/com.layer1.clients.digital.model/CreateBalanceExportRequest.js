/**
 * Digital Asset
 * Layer1 API making management of crypto assets simple and easy
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateBalanceExportRequest model module.
 * @module com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateBalanceExportRequest
 * @version 1.0.0
 */
class CreateBalanceExportRequest {
    /**
     * Constructs a new <code>CreateBalanceExportRequest</code>.
     * @alias module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateBalanceExportRequest
     */
    constructor() { 
        
        CreateBalanceExportRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateBalanceExportRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateBalanceExportRequest} obj Optional instance to populate.
     * @return {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateBalanceExportRequest} The populated <code>CreateBalanceExportRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBalanceExportRequest();

            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('networks')) {
                obj['networks'] = ApiClient.convertToType(data['networks'], ['String']);
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], ['String']);
            }
            if (data.hasOwnProperty('assetPoolId')) {
                obj['assetPoolId'] = ApiClient.convertToType(data['assetPoolId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateBalanceExportRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateBalanceExportRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
            throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
        }
        // ensure the json data is a string
        if (data['asset'] && !(typeof data['asset'] === 'string' || data['asset'] instanceof String)) {
            throw new Error("Expected the field `asset` to be a primitive type in the JSON string but got " + data['asset']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['networks'])) {
            throw new Error("Expected the field `networks` to be an array in the JSON data but got " + data['networks']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['assets'])) {
            throw new Error("Expected the field `assets` to be an array in the JSON data but got " + data['assets']);
        }
        // ensure the json data is a string
        if (data['assetPoolId'] && !(typeof data['assetPoolId'] === 'string' || data['assetPoolId'] instanceof String)) {
            throw new Error("Expected the field `assetPoolId` to be a primitive type in the JSON string but got " + data['assetPoolId']);
        }

        return true;
    }


}



/**
 * network
 * @member {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateBalanceExportRequest.NetworkEnum} network
 */
CreateBalanceExportRequest.prototype['network'] = undefined;

/**
 * asset
 * @member {String} asset
 */
CreateBalanceExportRequest.prototype['asset'] = undefined;

/**
 * networks
 * @member {Array.<module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/CreateBalanceExportRequest.NetworksEnum>} networks
 */
CreateBalanceExportRequest.prototype['networks'] = undefined;

/**
 * assets
 * @member {Array.<String>} assets
 */
CreateBalanceExportRequest.prototype['assets'] = undefined;

/**
 * The ID of the asset pool for which the report will be generated.
 * @member {String} assetPoolId
 */
CreateBalanceExportRequest.prototype['assetPoolId'] = undefined;





/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */
CreateBalanceExportRequest['NetworkEnum'] = {

    /**
     * value: "BASE"
     * @const
     */
    "BASE": "BASE",

    /**
     * value: "BINANCE"
     * @const
     */
    "BINANCE": "BINANCE",

    /**
     * value: "BITCOIN"
     * @const
     */
    "BITCOIN": "BITCOIN",

    /**
     * value: "BITCOIN_CASH"
     * @const
     */
    "BITCOIN_CASH": "BITCOIN_CASH",

    /**
     * value: "DOGECOIN"
     * @const
     */
    "DOGECOIN": "DOGECOIN",

    /**
     * value: "ETHEREUM"
     * @const
     */
    "ETHEREUM": "ETHEREUM",

    /**
     * value: "LITECOIN"
     * @const
     */
    "LITECOIN": "LITECOIN",

    /**
     * value: "POLYGON"
     * @const
     */
    "POLYGON": "POLYGON",

    /**
     * value: "RIPPLE"
     * @const
     */
    "RIPPLE": "RIPPLE",

    /**
     * value: "SOLANA"
     * @const
     */
    "SOLANA": "SOLANA",

    /**
     * value: "TRON"
     * @const
     */
    "TRON": "TRON",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


/**
 * Allowed values for the <code>networks</code> property.
 * @enum {String}
 * @readonly
 */
CreateBalanceExportRequest['NetworksEnum'] = {

    /**
     * value: "BASE"
     * @const
     */
    "BASE": "BASE",

    /**
     * value: "BINANCE"
     * @const
     */
    "BINANCE": "BINANCE",

    /**
     * value: "BITCOIN"
     * @const
     */
    "BITCOIN": "BITCOIN",

    /**
     * value: "BITCOIN_CASH"
     * @const
     */
    "BITCOIN_CASH": "BITCOIN_CASH",

    /**
     * value: "DOGECOIN"
     * @const
     */
    "DOGECOIN": "DOGECOIN",

    /**
     * value: "ETHEREUM"
     * @const
     */
    "ETHEREUM": "ETHEREUM",

    /**
     * value: "LITECOIN"
     * @const
     */
    "LITECOIN": "LITECOIN",

    /**
     * value: "POLYGON"
     * @const
     */
    "POLYGON": "POLYGON",

    /**
     * value: "RIPPLE"
     * @const
     */
    "RIPPLE": "RIPPLE",

    /**
     * value: "SOLANA"
     * @const
     */
    "SOLANA": "SOLANA",

    /**
     * value: "TRON"
     * @const
     */
    "TRON": "TRON",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default CreateBalanceExportRequest;


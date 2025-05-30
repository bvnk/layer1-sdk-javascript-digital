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
import Balance from './Balance';

/**
 * The Address model module.
 * @module com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Address
 * @version 1.0.0
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * @alias module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Address} obj Optional instance to populate.
     * @return {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('assetPoolId')) {
                obj['assetPoolId'] = ApiClient.convertToType(data['assetPoolId'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('keyPairId')) {
                obj['keyPairId'] = ApiClient.convertToType(data['keyPairId'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('supportedAssets')) {
                obj['supportedAssets'] = ApiClient.convertToType(data['supportedAssets'], ['String']);
            }
            if (data.hasOwnProperty('aliases')) {
                obj['aliases'] = ApiClient.convertToType(data['aliases'], ['String']);
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('balances')) {
                obj['balances'] = ApiClient.convertToType(data['balances'], [Balance]);
            }
            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('master')) {
                obj['master'] = ApiClient.convertToType(data['master'], 'Boolean');
            }
            if (data.hasOwnProperty('supportedNetworks')) {
                obj['supportedNetworks'] = ApiClient.convertToType(data['supportedNetworks'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Address</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Address</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['assetPoolId'] && !(typeof data['assetPoolId'] === 'string' || data['assetPoolId'] instanceof String)) {
            throw new Error("Expected the field `assetPoolId` to be a primitive type in the JSON string but got " + data['assetPoolId']);
        }
        // ensure the json data is a string
        if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
            throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
        }
        // ensure the json data is a string
        if (data['keyPairId'] && !(typeof data['keyPairId'] === 'string' || data['keyPairId'] instanceof String)) {
            throw new Error("Expected the field `keyPairId` to be a primitive type in the JSON string but got " + data['keyPairId']);
        }
        // ensure the json data is a string
        if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
            throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supportedAssets'])) {
            throw new Error("Expected the field `supportedAssets` to be an array in the JSON data but got " + data['supportedAssets']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['aliases'])) {
            throw new Error("Expected the field `aliases` to be an array in the JSON data but got " + data['aliases']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        if (data['balances']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['balances'])) {
                throw new Error("Expected the field `balances` to be an array in the JSON data but got " + data['balances']);
            }
            // validate the optional field `balances` (array)
            for (const item of data['balances']) {
                Balance.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['customerId'] && !(typeof data['customerId'] === 'string' || data['customerId'] instanceof String)) {
            throw new Error("Expected the field `customerId` to be a primitive type in the JSON string but got " + data['customerId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supportedNetworks'])) {
            throw new Error("Expected the field `supportedNetworks` to be an array in the JSON data but got " + data['supportedNetworks']);
        }

        return true;
    }


}



/**
 * internal id
 * @member {String} id
 */
Address.prototype['id'] = undefined;

/**
 * blockchain address
 * @member {String} address
 */
Address.prototype['address'] = undefined;

/**
 * asset pool id
 * @member {String} assetPoolId
 */
Address.prototype['assetPoolId'] = undefined;

/**
 * crypto network
 * @member {String} network
 */
Address.prototype['network'] = undefined;

/**
 * key pair id
 * @member {String} keyPairId
 */
Address.prototype['keyPairId'] = undefined;

/**
 * key pair reference
 * @member {String} reference
 */
Address.prototype['reference'] = undefined;

/**
 * list of assets supported by network
 * @member {Array.<String>} supportedAssets
 */
Address.prototype['supportedAssets'] = undefined;

/**
 * alternative address (e.g. BTC has segwitt and legacy format)
 * @member {Array.<String>} aliases
 */
Address.prototype['aliases'] = undefined;

/**
 * destination tag that serves as optional payment identifier. Only applicable to select networks like Ripple, Solana etc.
 * @member {String} tag
 */
Address.prototype['tag'] = undefined;

/**
 * address balances
 * @member {Array.<module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Balance>} balances
 */
Address.prototype['balances'] = undefined;

/**
 * custom non-unique identifier supplied for address that is used to link address to external entity like customer
 * @member {String} customerId
 */
Address.prototype['customerId'] = undefined;

/**
 * flag indicating whether this address is asset pool master address
 * @member {Boolean} master
 */
Address.prototype['master'] = undefined;

/**
 * list of networks supporting given asset. mutually exclusive with network and supportedAssets
 * @member {Array.<String>} supportedNetworks
 */
Address.prototype['supportedNetworks'] = undefined;






export default Address;


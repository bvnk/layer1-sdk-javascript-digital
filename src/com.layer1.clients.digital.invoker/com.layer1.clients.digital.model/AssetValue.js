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
 * The AssetValue model module.
 * @module com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/AssetValue
 * @version 1.0.0
 */
class AssetValue {
    /**
     * Constructs a new <code>AssetValue</code>.
     * @alias module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/AssetValue
     */
    constructor() { 
        
        AssetValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssetValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/AssetValue} obj Optional instance to populate.
     * @return {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/AssetValue} The populated <code>AssetValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetValue();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], Object);
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['asset'] && !(typeof data['asset'] === 'string' || data['asset'] instanceof String)) {
            throw new Error("Expected the field `asset` to be a primitive type in the JSON string but got " + data['asset']);
        }

        return true;
    }


}



/**
 * @member {Object} amount
 */
AssetValue.prototype['amount'] = undefined;

/**
 * currency
 * @member {String} asset
 */
AssetValue.prototype['asset'] = undefined;






export default AssetValue;


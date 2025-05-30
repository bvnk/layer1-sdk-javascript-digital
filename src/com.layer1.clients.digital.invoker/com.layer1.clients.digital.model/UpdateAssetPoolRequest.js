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
 * The UpdateAssetPoolRequest model module.
 * @module com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/UpdateAssetPoolRequest
 * @version 1.0.0
 */
class UpdateAssetPoolRequest {
    /**
     * Constructs a new <code>UpdateAssetPoolRequest</code>.
     * @alias module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/UpdateAssetPoolRequest
     */
    constructor() { 
        
        UpdateAssetPoolRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAssetPoolRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/UpdateAssetPoolRequest} obj Optional instance to populate.
     * @return {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/UpdateAssetPoolRequest} The populated <code>UpdateAssetPoolRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAssetPoolRequest();

            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateAssetPoolRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAssetPoolRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['property'] && !(typeof data['property'] === 'string' || data['property'] instanceof String)) {
            throw new Error("Expected the field `property` to be a primitive type in the JSON string but got " + data['property']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * name of asset pool property
 * @member {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/UpdateAssetPoolRequest.PropertyEnum} property
 */
UpdateAssetPoolRequest.prototype['property'] = undefined;

/**
 * value for the property
 * @member {String} value
 */
UpdateAssetPoolRequest.prototype['value'] = undefined;





/**
 * Allowed values for the <code>property</code> property.
 * @enum {String}
 * @readonly
 */
UpdateAssetPoolRequest['PropertyEnum'] = {

    /**
     * value: "masterKeyPairId"
     * @const
     */
    "masterKeyPairId": "masterKeyPairId",

    /**
     * value: "reference"
     * @const
     */
    "reference": "reference",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default UpdateAssetPoolRequest;


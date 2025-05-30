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
import Pageable from './Pageable';
import Transaction from './Transaction';

/**
 * The PaginatedResultTransaction model module.
 * @module com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/PaginatedResultTransaction
 * @version 1.0.0
 */
class PaginatedResultTransaction {
    /**
     * Constructs a new <code>PaginatedResultTransaction</code>.
     * @alias module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/PaginatedResultTransaction
     */
    constructor() { 
        
        PaginatedResultTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedResultTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/PaginatedResultTransaction} obj Optional instance to populate.
     * @return {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/PaginatedResultTransaction} The populated <code>PaginatedResultTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedResultTransaction();

            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [Transaction]);
            }
            if (data.hasOwnProperty('pageable')) {
                obj['pageable'] = Pageable.constructFromObject(data['pageable']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaginatedResultTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaginatedResultTransaction</code>.
     */
    static validateJSON(data) {
        if (data['content']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['content'])) {
                throw new Error("Expected the field `content` to be an array in the JSON data but got " + data['content']);
            }
            // validate the optional field `content` (array)
            for (const item of data['content']) {
                Transaction.validateJSON(item);
            };
        }
        // validate the optional field `pageable`
        if (data['pageable']) { // data not null
          Pageable.validateJSON(data['pageable']);
        }

        return true;
    }


}



/**
 * total number of items in all pages
 * @member {Number} totalElements
 */
PaginatedResultTransaction.prototype['totalElements'] = undefined;

/**
 * list of items
 * @member {Array.<module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Transaction>} content
 */
PaginatedResultTransaction.prototype['content'] = undefined;

/**
 * @member {module:com.layer1.clients.digital.invoker/com.layer1.clients.digital.model/Pageable} pageable
 */
PaginatedResultTransaction.prototype['pageable'] = undefined;






export default PaginatedResultTransaction;


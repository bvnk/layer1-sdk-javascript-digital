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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.layer1.clients.digital.invoker/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.layer1.clients.digital.invoker/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DigitalAsset);
  }
}(this, function(expect, DigitalAsset) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DigitalAsset.ExportApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExportApi', function() {
    describe('createBalanceExport', function() {
      it('should call createBalanceExport successfully', function(done) {
        //uncomment below and update the code to test createBalanceExport
        //instance.createBalanceExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExport', function() {
      it('should call getExport successfully', function(done) {
        //uncomment below and update the code to test getExport
        //instance.getExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExports', function() {
      it('should call getExports successfully', function(done) {
        //uncomment below and update the code to test getExports
        //instance.getExports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

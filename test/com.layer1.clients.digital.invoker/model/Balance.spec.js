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
    instance = new DigitalAsset.Balance();
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

  describe('Balance', function() {
    it('should create an instance of Balance', function() {
      // uncomment below and update the code to test Balance
      //var instance = new DigitalAsset.Balance();
      //expect(instance).to.be.a(DigitalAsset.Balance);
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new DigitalAsset.Balance();
      //expect(instance).to.be();
    });

    it('should have the property asset (base name: "asset")', function() {
      // uncomment below and update the code to test the property asset
      //var instance = new DigitalAsset.Balance();
      //expect(instance).to.be();
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instance = new DigitalAsset.Balance();
      //expect(instance).to.be();
    });

    it('should have the property reserved (base name: "reserved")', function() {
      // uncomment below and update the code to test the property reserved
      //var instance = new DigitalAsset.Balance();
      //expect(instance).to.be();
    });

    it('should have the property blockchain (base name: "blockchain")', function() {
      // uncomment below and update the code to test the property blockchain
      //var instance = new DigitalAsset.Balance();
      //expect(instance).to.be();
    });

  });

}));

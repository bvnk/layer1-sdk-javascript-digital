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
    instance = new DigitalAsset.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be.a(DigitalAsset.Address);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property assetPoolId (base name: "assetPoolId")', function() {
      // uncomment below and update the code to test the property assetPoolId
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property keyPairId (base name: "keyPairId")', function() {
      // uncomment below and update the code to test the property keyPairId
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property supportedAssets (base name: "supportedAssets")', function() {
      // uncomment below and update the code to test the property supportedAssets
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property balances (base name: "balances")', function() {
      // uncomment below and update the code to test the property balances
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property customerId (base name: "customerId")', function() {
      // uncomment below and update the code to test the property customerId
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property master (base name: "master")', function() {
      // uncomment below and update the code to test the property master
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

    it('should have the property supportedNetworks (base name: "supportedNetworks")', function() {
      // uncomment below and update the code to test the property supportedNetworks
      //var instance = new DigitalAsset.Address();
      //expect(instance).to.be();
    });

  });

}));

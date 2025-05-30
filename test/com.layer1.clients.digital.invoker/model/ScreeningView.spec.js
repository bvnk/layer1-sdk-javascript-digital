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
    instance = new DigitalAsset.ScreeningView();
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

  describe('ScreeningView', function() {
    it('should create an instance of ScreeningView', function() {
      // uncomment below and update the code to test ScreeningView
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be.a(DigitalAsset.ScreeningView);
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property transactionHash (base name: "transactionHash")', function() {
      // uncomment below and update the code to test the property transactionHash
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property transactionStatus (base name: "transactionStatus")', function() {
      // uncomment below and update the code to test the property transactionStatus
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property transactionMetadata (base name: "transactionMetadata")', function() {
      // uncomment below and update the code to test the property transactionMetadata
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property transactionCreatedAt (base name: "transactionCreatedAt")', function() {
      // uncomment below and update the code to test the property transactionCreatedAt
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property transactionUpdatedAt (base name: "transactionUpdatedAt")', function() {
      // uncomment below and update the code to test the property transactionUpdatedAt
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property screeningState (base name: "screeningState")', function() {
      // uncomment below and update the code to test the property screeningState
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property screeningReason (base name: "screeningReason")', function() {
      // uncomment below and update the code to test the property screeningReason
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property screeningReasonCode (base name: "screeningReasonCode")', function() {
      // uncomment below and update the code to test the property screeningReasonCode
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property screeningCreatedAt (base name: "screeningCreatedAt")', function() {
      // uncomment below and update the code to test the property screeningCreatedAt
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property screeningUpdatedAt (base name: "screeningUpdatedAt")', function() {
      // uncomment below and update the code to test the property screeningUpdatedAt
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property screeningMetadata (base name: "screeningMetadata")', function() {
      // uncomment below and update the code to test the property screeningMetadata
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property participants (base name: "participants")', function() {
      // uncomment below and update the code to test the property participants
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

    it('should have the property addressId (base name: "addressId")', function() {
      // uncomment below and update the code to test the property addressId
      //var instance = new DigitalAsset.ScreeningView();
      //expect(instance).to.be();
    });

  });

}));

var assert = require('chai').assert;
var sasGen = require("../sasGen.js");

describe('Test SAS Generator', function() {
  describe('function create SAS key', function() {
    it('should return something with SharedAccessSignature in the text', function() {
        var text = sasGen.getSAS();
        assert.include(text,'SharedAccessSignature','Ok, it returned a SAS key');
    });
  });
})
'use strict';

const chai = require('chai')
  , upsCodes = require('../')
  ;

chai.should();

describe('ups-service-codes tests', () => {
  it('should be an object', () => {
    upsCodes.should.be.an('object');
  });

  it(".isValid('01') should be true", () => {
    upsCodes.isValid('01').should.be.true;
  });

  it(".isValid('00') should be false", () => {
    upsCodes.isValid('00').should.be.false;
  });
})

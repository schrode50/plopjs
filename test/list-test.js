'use strict';

const chai = require('chai');
const expect = chai.expect;
// const fs = require('fs-extra');
const list = require(__dirname + '/../lib/list');

describe('should test the list functionality', () => {
  it('should identify list as a function', () => {
    expect(list).to.eql.function;
  });
});

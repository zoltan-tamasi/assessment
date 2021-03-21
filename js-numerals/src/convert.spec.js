const { expect } = require('chai');

const convert = require('./convert');

describe('Basic spec', () => {
  it('convert function should exist', () => {
    expect(convert).not.to.be.undefined;
  });

  it('convert function should work correctly #1', () => {
    expect(convert(7)).to.equal('seven');
  });

});

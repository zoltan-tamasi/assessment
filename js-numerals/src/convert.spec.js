const { expect } = require('chai');

const convert = require('./convert');

describe('Basic spec', () => {
  it('convert function should exist', () => {
    expect(convert).not.to.be.undefined;
  });

  it('convert function should work correctly #1', () => {
    expect(convert(7)).to.equal('seven');
  });

  it('convert function should work correctly #2', () => {
    expect(convert(0)).to.equal('zero');
  });

  it('convert function should work correctly #3', () => {
    expect(convert(42)).to.equal('forty-two');
  });

  it('convert function should work correctly #4', () => {
    expect(convert(10)).to.equal('ten');
  });

  it('convert function should work correctly #5', () => {
    expect(convert(11)).to.equal('eleven');
  });

  it('convert function should work correctly #6', () => {
    expect(convert(19)).to.equal('nineteen');
  });

  it('convert function should work correctly #7', () => {
    expect(convert(29)).to.equal('twenty-nine');
  });

  it('convert function should work correctly #8', () => {
    expect(convert(100)).to.equal('one hundred');
  });

  it('convert function should work correctly #9', () => {
    expect(convert(201)).to.equal('two hundred and one');
  });

  it('convert function should work correctly #10', () => {
    expect(convert(2001)).to.equal('two thousand and one');
  });

  it('convert function should work correctly #11', () => {
    expect(convert(1999)).to.equal('nineteen hundred and ninety-nine');
  });

});

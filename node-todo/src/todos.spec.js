const { expect } = require('chai');

const todoRepository = require('./todo-repository');

describe('Basic spec', () => {
  it('can create todo entity', () => {
    expect(todoRepository.createTodo).not.to.be.undefined;
  });
});

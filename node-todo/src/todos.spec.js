const { expect } = require('chai');
const uuid = require('uuid');

const todoRepository = require('./todo-repository');

describe('Basic spec', () => {
  it('can create todo entity', () => {
    expect(todoRepository.createTodo).not.to.be.undefined;
  });

  it('can create and read back todo entity', () => {
    const newItem = todoRepository.createTodo({ text: 'todoItem', priority: 3, done: false });
    expect(newItem.text).to.equal('todoItem');
    expect(newItem.priority).to.equal(3);
    expect(newItem.done).to.equal(false);
    expect(uuid.validate(newItem.id)).to.equal(true);
  });
});

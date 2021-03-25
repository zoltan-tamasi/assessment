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

  it('can read back todo entity by Id', () => {
    const newItem = todoRepository.createTodo({ text: 'todoItem', priority: 3, done: false });
    const readItem = todoRepository.getTodoById(newItem.id); 
    expect(readItem.text).to.equal('todoItem');
    expect(readItem.priority).to.equal(3);
    expect(readItem.done).to.equal(false);
    expect(readItem.id).to.equal(newItem.id);
  });

  it('can create then change todo entity by Id #1', () => {
    const newItem = todoRepository.createTodo({ text: 'todoItem', priority: 3, done: false });
    const updatedItem = todoRepository.updateTodoById(newItem.id, {
      text: 'changed'
    }); 
    expect(updatedItem.text).to.equal('changed');
    expect(updatedItem.priority).to.equal(3);
    expect(updatedItem.done).to.equal(false);
    expect(updatedItem.id).to.equal(newItem.id);
  });

  it('can create then change todo entity by Id #2', () => {
    const newItem = todoRepository.createTodo({ text: 'todoItem', priority: 3, done: false });
    const updatedItem = todoRepository.updateTodoById(newItem.id, {
      text: 'changed', priority: 5
    }); 
    expect(updatedItem.text).to.equal('changed');
    expect(updatedItem.priority).to.equal(5);
    expect(updatedItem.done).to.equal(false);
    expect(updatedItem.id).to.equal(newItem.id);
  });

  it('can delete todo entity by Id', () => {
    const newItem = todoRepository.createTodo({ text: 'todoItem', priority: 3, done: false });
    todoRepository.deleteTodoById(newItem.id); 
    expect(() => todoRepository.getTodoById(newItem.id)).to.throw();
  });
});

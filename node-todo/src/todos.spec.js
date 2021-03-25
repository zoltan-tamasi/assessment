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

  it('cannot create todo entity with invalid priority', () => {
    expect(() => todoRepository.createTodo({ text: 'todoItem', priority: 6, done: false })).to.throw;
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

  it('can load entities from a JSON object', () => {
    const id = uuid.v1();
    todoRepository.loadTodosFromJson(`[ { "text": "todoItem", "priority": 3, "done": "false", "id": "${id}" } ]`);
    const readItem = todoRepository.getTodoById(id); 
    expect(readItem.text).to.equal('todoItem');
  });

  it('cannot load entities from a JSON object with invalid priority value', () => {
    const id = uuid.v1();
    expect(() => todoRepository.loadTodosFromJson(`[ { "text": "todoItem", "priority": 6, "done": "false", "id": "${id}" } ]`)).to.throw;
  });

  it('can store and load back entities from a JSON object', () => {
    const newItem1 = todoRepository.createTodo({ text: 'todoItem1', priority: 3, done: false });
    const newItem2 = todoRepository.createTodo({ text: 'todoItem2', priority: 4, done: true });

    const jsonStore = todoRepository.storeTodosToJson();

    todoRepository.clearTodos();
    expect(todoRepository.getTodos().length).to.equal(0);

    todoRepository.loadTodosFromJson(jsonStore);

    const readItem1 = todoRepository.getTodoById(newItem1.id); 
    expect(readItem1.text).to.equal('todoItem1');
    expect(readItem1.priority).to.equal(3);
    expect(readItem1.done).to.equal(false);
    expect(readItem1.id).to.equal(readItem1.id);

    const readItem2 = todoRepository.getTodoById(newItem2.id); 
    expect(readItem2.text).to.equal('todoItem2');
    expect(readItem2.priority).to.equal(4);
    expect(readItem2.done).to.equal(true);
    expect(readItem2.id).to.equal(readItem2.id);
  });
});

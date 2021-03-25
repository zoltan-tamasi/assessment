
const uuid = require('uuid');
const { Map } = require('immutable');
let todos = Map();

const createTodo = ({
  text = '', priority = 3, done = false
}) => {
  if (!Number.isInteger(priority) || priority < 1 || priority > 5) {
    throw new TypeError('Priority must be an integer between 1 and 5');
  }
  const newItem = { text, priority, done, id: uuid.v1() };
  todos = todos.set(newItem.id, newItem);
  return newItem
};

const getTodos = () => {
  return Array.from(todos.values());
};

const getTodoById = (id) => {
  const todoItem = todos.get(id);
  if (todoItem === undefined) {
    throw new Error(`Todo item with id: ${id} cannot be found`);
  } 
  return todoItem;
};

const updateTodoById = (id, { text, priority, done }) => {
  const todoItem = getTodoById(id);
  if (getTodoById(id) === undefined) {
    throw new Error(`Todo item with id: ${id} cannot be found`);
  }
  if (priority !== undefined && (!Number.isInteger(priority) || priority < 1 || priority > 5)) {
    throw new TypeError('Priority must be an integer between 1 and 5');
  }
  todos = todos.set(id, Object.assign(todoItem, { text: text || todoItem.text, priority: priority || todoItem.priority, done: done || todoItem.done }));
  return getTodoById(id);
};

const deleteTodoById = (id) => {
  if (getTodoById(id) === undefined) {
    throw new Error(`Todo item with id: ${id} cannot be found`);
  }
  todos = todos.delete(id);
};

const storeTodosToJson = () => {
  return JSON.stringify(Array.from(todos.values()).map(({text, priority, done, id}) => ({ text, priority, id, done: done === true ? 'true' : 'false' })));
};

const loadTodosFromJson = (json) => {
  const todoList = JSON.parse(json);
  todos = Map(todoList.map(({ text, priority, done, id }) => ([id, { id, text, priority, done: done === 'true' ? true : false }])));
};

const clearTodos = () => {
  todos = Map();
};

module.exports = {
  createTodo, getTodos, getTodoById, updateTodoById, deleteTodoById, loadTodosFromJson, storeTodosToJson, clearTodos
};

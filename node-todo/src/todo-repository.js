
const uuid = require('uuid');
const { Map } = require('immutable');
let todos = Map();

const createTodo = ({
  text, priority, done
}) => {
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

const updateTodoById = (id, update) => {
  const todoItem = getTodoById(id);
  todos = todos.set(id, Object.assign(todoItem, update));
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

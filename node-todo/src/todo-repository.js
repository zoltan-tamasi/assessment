
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
  todos = todos.delete(id);
};

module.exports = {
  createTodo, getTodos, getTodoById, updateTodoById, deleteTodoById
};


const uuid = require('uuid');
const todos = [];

const createTodo = ({
  text, priority, done
}) => {
  const newItem = { text, priority, done, id: uuid.v1() };
  todos.push(newItem);
  return newItem
};

const getTodos = () => {
  return todos;
};

const getTodoById = (id) => {
  const todoItem = todos.find(todo => todo.id === id);
  if (todoItem === undefined) {
    throw new Error(`Todo item with id: ${id} cannot be found`);
  } 
  return todoItem;
};

module.exports = {
  createTodo, getTodos, getTodoById
};

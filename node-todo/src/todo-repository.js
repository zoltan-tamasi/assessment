
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

module.exports = {
  createTodo, getTodos
};

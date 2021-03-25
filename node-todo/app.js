
const express = require('express');
const bodyParser = require('body-parser');

const todoRepository = require('./src/todo-repository');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app
  .get('/todos/:id', ({ params: { id } }, res) => {
    try {
      const todo = todoRepository.getTodoById(id);
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.json({
        message: error.message
      });
    }
  })

  .get('/todos', (req, res) => {
    const todos = todoRepository.getTodos();
    res.json(todos);
  })

  .post('/todos', ({ body: { text, priority, done }}, res) => {  
    try {  
      const createdItem = todoRepository.createTodo({ text, priority, done });
      res.json(createdItem);
    } catch (error) {
      console.error(error);
      res.json({
        message: error.message
      });
    }
  })

  .put('/todos/:id', ({ params: { id }, body: update }, res) => {
    try {
      const todo = todoRepository.updateTodoById(id, update);
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.json({
        message: error.message
      });
    }
  })

  .delete('/todos/:id', ({ params: { id } }, res) => {
    try {
      todoRepository.deleteTodoById(id);
      res.json({
        message: `Todo item with id: ${id} successfully deleted`
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: error.message
      });
    }
  });

const server = app.listen(
  port,
  () => console.log(`Server is running on: ${port}`),
);

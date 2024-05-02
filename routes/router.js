const express = require('express');
const router = express.Router();
const todoController = require('../controller/Todo');


router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
module.exports = router;

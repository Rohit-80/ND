const express = require('express')
const router = express.Router();
const { getAlltask,CreateTask,deleteTask,UpdateTask,getTask } = require('../controller/tasks.js');

router.route('/').get(getAlltask).post(CreateTask);
router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask);


module.exports = router
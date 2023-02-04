const TaskModel = require("../models/task.model");

//get All task from mongoDb
module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    if (!tasks.length) {
      res.status(400).json({ message: "no task in BD" });
    } else {
      res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get task by id
module.exports.getTasksById = async (req, res) => {
  try {
    const tasks = await TaskModel.findById(req.params.id);
    if (!tasks) {
      res.status(400).json({ message: "task does not exist witch id" });
    } else {
      res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create task
module.exports.setTasks = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "please add a task" });
    } else {
      const tasks = await TaskModel.create({
        name: req.body.name,
      });
      res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete task from mongodb
module.exports.deleteTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findById(req.params.id);
    if (!tasks) {
      res.status(400).json({ message: "task does not exist witch id" });
    } else {
      await tasks.remove();
      res.status(200).json("task deleted " + req.params.id);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update task
module.exports.updateTasksById = async (req, res) => {
  try {
    const tasks = await TaskModel.findById(req.params.id);
    if (!tasks) {
      res.status(400).json({ message: "task does not exist witch id" });
    } else {
      const updatePost = await TaskModel.findByIdAndUpdate(tasks, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(updatePost);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

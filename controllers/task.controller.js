const TaskModel = require("../models/task.model");

//get All task from mongoDb
module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.status(200).json(tasks);
};

//create task
module.exports.setTasks = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "please add a task" });
  }
  const tasks = await TaskModel.create({
    name: req.body.name,
  });
  res.status(200).json(tasks);
};

//delete task from mongodb
module.exports.deleteTasks = async (req, res) => {
  const tasks = await TaskModel.findById(req.params.id);
  if (!tasks) {
    res.status(400).json({ message: "task does not exist" });
  }
  await tasks.remove();
  res.status(200).json("task deleted " + req.params.id);
};

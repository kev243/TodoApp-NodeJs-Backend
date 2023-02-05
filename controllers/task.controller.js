const TaskModel = require("../models/task.model");
const mongoose = require("mongoose");

module.exports = {
  //get All task from mongoDb
  async getTasks(req, res) {
    try {
      const tasks = await TaskModel.find();
      if (!tasks.length) {
        return res.status(400).json({ message: "no task in BD" });
      }
      return res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //get task by id
  async getTasksById(req, res) {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: "Invalid Task ID" });
      }
      const tasks = await TaskModel.findById(req.params.id);

      if (!tasks) {
        return res
          .status(400)
          .json({ message: "task does not exist witch id" });
      }
      return res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //create task
  async setTasks(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "please add a task" });
      }

      const tasks = await TaskModel.create({
        name,
      });

      return res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //delete task from mongodb
  async deleteTasks(req, res) {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({ message: "Invalid Task ID" });
      }

      const tasks = await TaskModel.findById(req.params.id);

      if (!tasks) {
        return res
          .status(400)
          .json({ message: "task does not exist witch id" });
      }
      await tasks.remove();
      return res.status(200).json("task deleted " + req.params.id);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //update task
  async updateTasksById(req, res) {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: "Invalid Task ID" });
      }
      const tasks = await TaskModel.findById(req.params.id);

      if (!tasks) {
        return res
          .status(400)
          .json({ message: "task does not exist witch id" });
      }

      const updateTask = await TaskModel.findByIdAndUpdate(tasks, req.body, {
        new: true,
        runValidators: true,
      });
      return res.status(200).json(updateTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

const express = require("express");
const {
  getTasks,
  setTasks,
  deleteTasks,
  getTasksById,
  updateTasksById,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/", getTasks);

router.get("/task/:id", getTasksById);

router.post("/", setTasks);

router.delete("/:id", deleteTasks);

router.put("/:id", updateTasksById);

module.exports = router;

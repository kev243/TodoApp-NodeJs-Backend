const express = require("express");
const {
  getTasks,
  setTasks,
  deleteTasks,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/", getTasks);

router.post("/", setTasks);

router.delete("/:id", deleteTasks);

module.exports = router;

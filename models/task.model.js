const mongoose = require("mongoose");

const taskShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name of your task"],
    },

    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", taskShema);

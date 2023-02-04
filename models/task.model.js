const mongoose = require("mongoose");

const taskShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

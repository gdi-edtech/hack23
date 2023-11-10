const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    teachingtext: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TeachingText",
    },
  },
  {
    timestamps: true,
  }
);

const Thread = mongoose.model("Thread", threadSchema);
module.exports = Thread;
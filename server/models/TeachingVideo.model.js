const mongoose = require("mongoose");

const teachingVideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true },
    caption: {
      type: String,
      required: true
    },
   
    video: { type: String },
    categories: { type: Array, required: true },
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  },
  { timestamps: true }
);

const TeachingVideo = mongoose.model("TeachingVideo", teachingVideoSchema);
module.exports = TeachingVideo;
const { Schema, model } = require("mongoose");

const VideoUploadSchema = new Schema(
  {
    caption: {
      type: String,
      required: true
    },
   
    video: { type: String },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true
    }
  },
  {
    timestamps: true,
  }
);

const VideoUpload = model("VideoUpload", VideoUploadSchema);
module.exports = VideoUpload;

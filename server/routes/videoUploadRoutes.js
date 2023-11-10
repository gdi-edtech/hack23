const express = require("express");
const router = express.Router();
const videoUploadController = require("../controllers/videoUploadController");
const { createVideoUpload,getAllVideoUploads,getVideoUploadById,updateVideoUploadById,deleteVideoUploadById } = videoUploadController;
// Create a new video upload
router.post("/", createVideoUpload);

// Get all video uploads
router.get("/", getAllVideoUploads);

// Get a single video upload by ID
router.get("/:id", getVideoUploadById);

// Update a video upload by ID
router.put("/:id", updateVideoUploadById);

// Delete a video upload by ID
router.delete(
  "/:id",
  deleteVideoUploadById
);

module.exports = router;

const express = require("express");
const router = express.Router();
const teachingVideoController = require("../controllers/teachingVideoController");
const { createTeachingVideo,getAllTeachingVideos,getTeachingVideoById,updateTeachingVideoById,deleteTeachingVideoById } = teachingVideoController;
// Create a new teaching Video
router.post("/", createTeachingVideo);


// Get all teaching Videos 
router.get("/", getAllTeachingVideos);


// Get a single teaching Video by ID
router.get("/:id", getTeachingVideoById);


// Update a teaching Video by ID
router.put("/:id", updateTeachingVideoById);


// Delete a teaching Video by ID
router.delete(
 "/:id",
 deleteTeachingVideoById
);


module.exports = router;
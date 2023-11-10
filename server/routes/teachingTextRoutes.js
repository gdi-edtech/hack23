const express = require("express");
const router = express.Router();
const teachingTextController = require("../controllers/teachingTextController");
const { createTeachingText,getAllTeachingTexts,getTeachingTextById,updateTeachingTextById,deleteTeachingTextById } = teachingTextController;
// Create a new teaching text
router.post("/", createTeachingText);


// Get all teaching texts 
router.get("/", getAllTeachingTexts);


// Get a single teaching text by ID
router.get("/:id", getTeachingTextById);


// Update a teaching text by ID
router.put("/:id", updateTeachingTextById);


// Delete a teaching text by ID
router.delete(
 "/:id",
 deleteTeachingTextById
);


module.exports = router;
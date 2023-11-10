const express = require("express");
const router = express.Router();
const threadController = require("../controllers/threadController");
const { createThread,getAllThreads,getThreadById,updateThreadById,deleteThreadById } = threadController;

// Create a new thread
router.post("/", createThread);

// Get all threads
router.get("/", getAllThreads);

// Get a single thread by ID
router.get("/:id", getThreadById);

// Update a thread by ID
router.put("/:id", updateThreadById);

// Delete a thread by ID
router.delete(
  "/:id",
  deleteThreadById
);

module.exports = router;
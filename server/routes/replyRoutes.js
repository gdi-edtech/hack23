const express = require("express");
const router = express.Router();
const replyController = require("../controllers/replyController");
const { createReply,getAllReplys,getReplyById,updateReplyById,deleteReplyById } = replyController;

// Create a new reply
router.post("/", createReply);

// Get all replys
router.get("/", getAllReplys);

// Get a single reply by ID
router.get("/:id", getReplyById);

// Update a reply by ID
router.put("/:id", updateReplyById);

// Delete a reply by ID
router.delete(
  "/:id",
  deleteReplyById
);

module.exports = router;
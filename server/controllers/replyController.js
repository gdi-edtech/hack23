const Reply = require("../models/Reply.model.js");


// Create a new reply
const createReply = async (req, res) => {
   try {
	 const { content, userId, teachingtext  } = req.body;
     const newReply = new Reply({ content, user: userId, teachingtext });
     const savedReply = await newReply.save();
     res.status(201).json(savedReply);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };


// Get all replies
const getAllReplys = async (req, res) => {
 try {
   const Replys = await Reply.find();
   res.status(200).json(Replys);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Get a single reply by ID
const getReplyById = async (req, res) => {
 try {
   const Reply = await Reply.findById(req.params.id);
   if (!Reply) {
     return res.status(404).json({ error: "Reply not found" });
   }
   res.status(200).json(Reply);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Update a reply by ID
const updateReplyById = async (req, res) => {
 try {
   const { content, userId, teachingtext  } = req.body;
   const updatedReply = await Reply.findByIdAndUpdate(
     req.params.id,
     { content, userId, teachingtext },
     { new: true }
   );
   if (!updatedReply) {
     return res.status(404).json({ error: "Reply not found" });
   }
   res.status(200).json(updatedReply);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Delete a reply by ID
const deleteReplyById = async (req, res) => {
 try {
   const deletedReply = await Reply.findByIdAndDelete(
     req.params.id
   );
   if (!deletedReply) {
     return res.status(404).json({ error: "Reply not found" });
   }
   res.status(200).json({ message: "Reply deleted successfully" });
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};

module.exports ={
   createReply,
   getAllReplys,
   getReplyById,
   updateReplyById,
   deleteReplyById
}
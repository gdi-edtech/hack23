const Reply = require("../models/Reply.model.js");


// Create a new reply
const createReply = async (req, res) => {
   try {
	 const { content, userId, thread  } = req.body;
     const newReply = new Reply({ content, user: userId, thread });
     const savedReply = await newReply.save();
     res.status(201).json(savedReply);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };


// Get all replies
const getAllReplys = async (req, res) => {
 try {
	const finalQuery = {
		where: {
			teachingtext: req.lessonId
		},
		include: [
			{
				model: User,
				as: 'user',
				attributes: {},
			},
	],}
   const replys = await Reply.findAll(finalQuery);
   res.status(200).json(replys);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Get a single reply by ID
const getReplyById = async (req, res) => {
 try {
   const reply = await Reply.findById(req.params.id);
   if (!reply) {
     return res.status(404).json({ error: "Reply not found" });
   }
   res.status(200).json(reply);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Update a reply by ID
const updateReplyById = async (req, res) => {
 try {
   const { content, userId, thread  } = req.body;
   const updatedReply = await Reply.findByIdAndUpdate(
     req.params.id,
     { content, userId, thread },
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
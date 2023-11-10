const Thread = require("../models/Thread.model.js");


// Create a new thread
const createThread = async (req, res) => {
   try {
	 const { content, userId, thread  } = req.body;
     const newThread = new Thread({ content, user: userId, thread });
     const savedThread = await newThread.save();
     res.status(201).json(savedThread);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };


// Get all threads
const getAllThreads = async (req, res) => {
 try {
   const threads = await Thread.find();
   res.status(200).json(threads);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Get a single thread by ID
const getThreadById = async (req, res) => {
 try {
   const thread = await Thread.findById(req.params.id);
   if (!thread) {
     return res.status(404).json({ error: "Thread not found" });
   }
   res.status(200).json(thread);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Update a thread by ID
const updateThreadById = async (req, res) => {
 try {
   const { content, userId, thread  } = req.body;
   const updatedThread = await Thread.findByIdAndUpdate(
     req.params.id,
     { content, userId, thread },
     { new: true }
   );
   if (!updatedThread) {
     return res.status(404).json({ error: "Thread not found" });
   }
   res.status(200).json(updatedThread);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Delete a thread by ID
const deleteThreadById = async (req, res) => {
 try {
   const deletedThread = await Thread.findByIdAndDelete(
     req.params.id
   );
   if (!deletedThread) {
     return res.status(404).json({ error: "Thread not found" });
   }
   res.status(200).json({ message: "Thread deleted successfully" });
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};

module.exports ={
   createThread,
   getAllThreads,
   getThreadById,
   updateThreadById,
   deleteThreadById
}
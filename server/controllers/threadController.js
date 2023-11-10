const Thread = require("../models/Thread.model.js");


// Create a new thread
// const createThread = async (req, res) => {
//    try {
// 	 const { content, userId, teachingtext  } = req.body;
//      const newThread = new Thread({ content, user: userId, teachingtext });
//      const savedThread = await newThread.save();
//      res.status(201).json(savedThread);
//    } catch (error) {
//      res.status(500).json({ error: error.message });
//    }
//  };
const createThread = async (req, res) => {
	const { content, userId } = req.body;
	
	try {
		let user;
	
		if (userId) {
		// If user ID is provided in the request, use it
		user = await User.findById(userId);
	
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		} else {
		// If no user ID is provided, use a default user ID
		const defaultUserId = "654d297fc93255b6bd60ec00"; // Replace with your default user ID
		user = await User.findById(defaultUserId);
	
		if (!user) {
			return res.status(404).json({ message: "Default user not found" });
		}
		}
	
		const newThread = new Thread({
		content,
		user: user._id, // Associate the thread with the user
		});
	
		const insertedThread = await newThread.save();
	
		return res.status(201).json(insertedThread);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
  };


// Get all threads
const getAllThreads = async (req, res) => {
 try {
	const finalQuery = {
		where: {
			teachingtext: req.lessonId
		},
		include: [
			{
				model: Reply,
				as: 'replies',
				attributes: [],
			},
			{
				model: User,
				as: 'user',
				attributes: {},
			},
	],}
	const threads = await Thread.findAll(finalQuery);
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
   const { content, userId, teachingtext  } = req.body;
   const updatedThread = await Thread.findByIdAndUpdate(
     req.params.id,
     { content, userId, teachingtext },
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
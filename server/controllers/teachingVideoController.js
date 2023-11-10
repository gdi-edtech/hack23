const TeachingVideo = require("../models/teachingVideo.model.js");

// Create a new teaching video 
const createTeachingVideo = async (req, res) => {
  try {
    const { title, description, caption, video, categories, userId } = req.body;
    const newTeachingVideo = new TeachingVideo({ title, description, caption, video, categories, userId });
    const savedTeachingVideo = await newTeachingVideo.save();
    res.status(201).json(savedTeachingVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all teaching videos
const getAllTeachingVideos = async (req, res) => {
  try {
    const teachingVideos = await TeachingVideo.find();
    res.status(200).json(teachingVideos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single teaching video by ID
const getTeachingVideoById = async (req, res) => {
  try {
    const teachingVideo = await TeachingVideo.findById(req.params.id);
    if (!teachingVideo) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json(teachingVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a teaching video by ID
const updateTeachingVideoById = async (req, res) => {
  try {
    const { title, description, caption, video, categories, userId } = req.body;
    const updatedTeachingVideo = await TeachingVideo.findByIdAndUpdate(
      req.params.id,
      { title, description, caption, video, categories, userId },
      { new: true }
    );
    if (!updatedTeachingVideo) {
      return res.status(404).json({ error: "Video upload not found" });
    }
    res.status(200).json(updatedTeachingVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a teaching video by ID
const deleteTeachingVideoById = async (req, res) => {
  try {
    const deletedTeachingVideo = await TeachingVideo.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTeachingVideo) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports ={
    createTeachingVideo,
    getAllTeachingVideos,
    getTeachingVideoById,
    updateTeachingVideoById,
    deleteTeachingVideoById
}

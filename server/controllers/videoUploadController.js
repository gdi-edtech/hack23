const VideoUpload = require("../models/VideoUpload.model.js");

// Create a new video upload
const createVideoUpload = async (req, res) => {
  try {
    const { caption, video } = req.body;
    const newVideoUpload = new VideoUpload({ caption, video });
    const savedVideoUpload = await newVideoUpload.save();
    res.status(201).json(savedVideoUpload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all video uploads
const getAllVideoUploads = async (req, res) => {
  try {
    const videoUploads = await VideoUpload.find();
    res.status(200).json(videoUploads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single video upload by ID
const getVideoUploadById = async (req, res) => {
  try {
    const videoUpload = await VideoUpload.findById(req.params.id);
    if (!videoUpload) {
      return res.status(404).json({ error: "Video upload not found" });
    }
    res.status(200).json(videoUpload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a video upload by ID
const updateVideoUploadById = async (req, res) => {
  try {
    const { caption, video } = req.body;
    const updatedVideoUpload = await VideoUpload.findByIdAndUpdate(
      req.params.id,
      { caption, video },
      { new: true }
    );
    if (!updatedVideoUpload) {
      return res.status(404).json({ error: "Video upload not found" });
    }
    res.status(200).json(updatedVideoUpload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a video upload by ID
const deleteVideoUploadById = async (req, res) => {
  try {
    const deletedVideoUpload = await VideoUpload.findByIdAndDelete(
      req.params.id
    );
    if (!deletedVideoUpload) {
      return res.status(404).json({ error: "Video upload not found" });
    }
    res.status(200).json({ message: "Video upload deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports ={
    createVideoUpload,
    getAllVideoUploads,
    getVideoUploadById,
    updateVideoUploadById,
    deleteVideoUploadById
}
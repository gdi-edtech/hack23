
const TeachingText = require("../models/TeachingText.model.js");


// Create a new teaching text
const createTeachingText = async (req, res) => {
   try {
     const { title, description, categories, userId } = req.body;
     const newTeachingText = new TeachingText({ title, description, categories, user: userId });
     const savedTeachingText = await newTeachingText.save();
     res.status(201).json(savedTeachingText);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };


// Get all teaching texts
const getAllTeachingTexts = async (req, res) => {
 try {
   const teachingTexts = await TeachingText.find();
   res.status(200).json(teachingTexts);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Get a single teaching text by ID
const getTeachingTextById = async (req, res) => {
 try {
   const teachingText = await TeachingText.findById(req.params.id);
   if (!teachingText) {
     return res.status(404).json({ error: "Teaching Text not found" });
   }
   res.status(200).json(teachingText);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Update a teaching text by ID
const updateTeachingTextById = async (req, res) => {
 try {
   const { title, description, categories, userId } = req.body;
   const updatedTeachingText = await TeachingText.findByIdAndUpdate(
     req.params.id,
     { title, description, categories, userId },
     { new: true }
   );
   if (!updatedTeachingText) {
     return res.status(404).json({ error: "Teaching Text not found" });
   }
   res.status(200).json(updatedTeachingText);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};


// Delete a teaching text by ID
const deleteTeachingTextById = async (req, res) => {
 try {
   const deletedTeachingText = await TeachingText.findByIdAndDelete(
     req.params.id
   );
   if (!deletedTeachingText) {
     return res.status(404).json({ error: "Teaching Text not found" });
   }
   res.status(200).json({ message: "Teaching Text deleted successfully" });
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
};

module.exports ={
   createTeachingText,
   getAllTeachingTexts,
   getTeachingTextById,
   updateTeachingTextById,
   deleteTeachingTextById
}

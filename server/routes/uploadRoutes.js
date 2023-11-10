const express = require("express");
const uploadController = require("../controllers/uploadController");
const { uploadVideo } = uploadController;
const router = express.Router();
const multer = require("multer");
const multerSingle = multer();

// Create a new supplier

router.post("/", multerSingle.single("video"), uploadVideo);

module.exports = router;

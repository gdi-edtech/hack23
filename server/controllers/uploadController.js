const cloudinary = require("cloudinary").v2;
const { Readable } = require("stream");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const bufferUpload = async (buffer) => {
  return new Promise((resolve, reject) => {
    const writeStream = cloudinary.uploader.upload_stream(
      { resource_type: "video"},
      (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve(result);
    });
    const readStream = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });
    readStream.pipe(writeStream);
  });
};

const uploadVideo = async (req, res) => {
 
 
    const { buffer } = req.file;

  try {
    const { secure_url } = await bufferUpload(buffer);

    res.status(200).json({ url: secure_url });
  } catch (error) {
    res.status(500).send("Something went wrong, please try again later.");
  }
};

module.exports = {
  uploadVideo,
};

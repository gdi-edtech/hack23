const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.config');
const compiler = webpack(config);

// MODELS IMPORT
const User = require("./models/User.model");

const mongoAtlasUri = "HAS TO BE REPLACED BY THE MONGODB ATLAS URI PROVIDED"

const app = express();

// CLOUDINARY
const uploader = require("./config/cloudinary");
require('dotenv').config();

app.post(
  "/knowledge/form",
  uploader.single("img"),
  async (req, res, next) => {
    try {
      // Check the request body of the front
      let img;
      if (req.file) {
        img = req.file.path;
        console.log(img);
      }
      console.log("Creation ongoing");
      // Handle other processing or send a response
      res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
      // Handle any errors that occurred during file upload
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);


// parse incoming requests with JSON payloads
app.use(express.json());

// REQUIRED ROUTERS

// REQUIRED CONTROLLERS (IF NEEDED HERE)

const PORT = process.env.PORT || 3001;

// parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// serve static files in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, './../dist')));
}

// serve files on publicPath specified in webpack config
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

// ADD ROUTES HERE
// ex app.use('/comments', CommentRouter);

// HOME

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});

// USER ROUTES

app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

app.post("/user", async (req, res) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
})

// serve 404 status
app.use((req, res) => res.sendStatus(404));

// global error handling
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

try {
  // Connect to the MongoDB cluster
  mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Listen for successful connection
  mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
  });

  // Listen for connection errors
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error: ' + err);
  });

} catch (e) {
  console.log('Could not connect');
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
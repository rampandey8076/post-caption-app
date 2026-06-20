const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadfile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage()
});

// CREATE POST
app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    console.log("REQUEST FILE:", req.file);
    console.log("REQUEST BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const result = await uploadfile(req.file.buffer);

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption
    });

    res.status(201).json({
      message: "Post created successfully",
      post
    });
  } catch (err) {
    console.error("CREATE POST ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET POSTS
app.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json({
      message: "Posts fetched successfully",
      posts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching posts" });
  }
});
app.delete("/post/:id", async (req, res) => {
  try {
    await postModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Post deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting post"
    });
  }
});
module.exports = app;
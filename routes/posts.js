// moved all the routes from server to this file (posts.js)
import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../contorller/postController.js";
const router = express.Router();

//Get all the posts
router.get("/", getAllPosts);

//Get single post
router.get("/:id", getPost);

//Create new post
router.post("/", createPost);

//Update post
router.put("/:id", updatePost);

//Delete
router.delete("/:id", deletePost);
export default router;

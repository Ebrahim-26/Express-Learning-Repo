// moved all the routes from server to this file (posts.js)
import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
];

//Get all the posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit); //can get query params using req.query
  if (!isNaN(limit) && limit > 0) {
    //checking if it is a num and positive
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//Get single post
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id); //converting the id string to number
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(posts.filter((post) => post.id === id)); // returning only the id which matches the data
});

//Create new post
router.post("/", (req, res, next) => {

  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Title is missing`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  console.log(req.body);
  res.status(200).json(posts);
});

//Update post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post, "POST");
  if (!post) {
    return res.status(404).json({ message: `ID ${id} not found` });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

//Delete
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: `ID ${id} not found to Delete` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});
export default router;

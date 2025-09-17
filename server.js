const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 8000;
//setup static folder
// app.use(express.static(path.join(__dirname, "public")));
//app.use = middleware
//express.static is how we set the static file. It takes in the path./

let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
];

//Get all the posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit); //can get query params using req.query
  if (!isNaN(limit) && limit > 0) {
    //checking if it is a num and positive
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//Get specific post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id); //converting the id string to number
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: `ID ${id} doesn't exists` });
  }
  res.status(200).json(posts.filter((post) => post.id === id)); // returning only the id which matches the data
});

app.listen(port, () => console.log(`Server is running on server port ${port}`));

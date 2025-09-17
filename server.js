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
  res.json(posts);
});

//Get specific post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  res.json(posts.filter((post)=>post.id === id));
});

app.listen(port, () => console.log(`Server is running on server port ${port}`));

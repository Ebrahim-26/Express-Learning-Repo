// moved all the routes from server to this file (posts.js)
import express from 'express'
const router = express.Router()

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
  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id); //converting the id string to number
    const post = posts.find((post) => post.id === id);
    if (!post) {
      return res.status(404).json({ message: `ID ${id} doesn't exists` });
    }
    res.status(200).json(posts.filter((post) => post.id === id)); // returning only the id which matches the data
  });

  //Create new post
  router.post('/',(req,res)=>{
    const newPost = {
        id: posts.length + 1,
        tittle: req.body.tittle
    }

    if (!newPost.tittle){
        return res.status(400).json({ message: "please include title"})
    }
    
    posts.push(newPost)
    console.log(req.body)
    res.status(200).json(posts);
  })
export default router
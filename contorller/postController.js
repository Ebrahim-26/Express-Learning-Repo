let posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
];

// @desc Get all posts
//@route GET  /api/posts
export const getAllPosts = (req, res) => {
  const limit = parseInt(req.query.limit); //can get query params using req.query
  if (!isNaN(limit) && limit > 0) {
    //checking if it is a num and positive
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

//@desc Get Single Post
//@route GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id); //converting the id string to number
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(posts.filter((post) => post.id === id)); // returning only the id which matches the data
};

//@desc create Post
//@route  POST /api/posts/:id
export const createPost = (req, res, next) => {
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
};

//@desc update Post
//@route  PUT /api/posts/:id
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  console.log(post, "POST");
  if (!post) {
    return res.status(404).json({ message: `ID ${id} not found` });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc delete Post
//@route  DELETE /api/posts/:id
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: `ID ${id} not found to Delete` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};

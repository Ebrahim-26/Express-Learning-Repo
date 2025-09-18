import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
const app = express();
const port = process.env.port || 8000;

// Body Parser Middleware
app.use(express.json()); //This will take care of the submission of the RAW json
app.use(express.urlencoded({ extended: false })); // This will allow us to send the form data

// Logger middleware
app.use(logger)

// Routes
app.use("/api/posts", posts); // Here the express sees the path, if it matches '/api/posts', it passes it to router (post.js)
// the router only sees '/' not the '/api/posts

app.listen(port, () => console.log(`Server is running on server port ${port}`));

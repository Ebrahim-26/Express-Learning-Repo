import express from 'express'
import path from 'path'
import posts from "./routes/posts.js";
const app = express();
const port = process.env.port || 8000;


//Routes
app.use('/api/posts', posts)



app.listen(port, () => console.log(`Server is running on server port ${port}`));

const express = require("express");
const path = require("path");
const app = express();

//setup static folder
app.use(express.static(path.join(__dirname,'public')))
//app.use = middleware
//express.static is how we set the static file. It takes in the path.

app.listen(8000, () => console.log(`Server is running on server 8000`));

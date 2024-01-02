const  express = require("express");
const mongoose = require("mongoose");
const userRouter = require( "./routes/user.routes");
const blogRouter = require("./routes/blog-routes");

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb+srv://user:3CzEEYzAwEpF7UUU@cluster0.n8opfkc.mongodb.net/Blog2api?retryWrites=true&w=majority")
.then(() => app.listen(7900))
    .then(() => 
    console.log("Connected to the database and listening to localhost 7900")
    )
    .catch((err) => console.log(err));






//mongo   3CzEEYzAwEpF7UUU
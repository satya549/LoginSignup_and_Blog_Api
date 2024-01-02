const express = require("express");
const { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } =  require ("../controllers/Blog-controllers");
const { Model } = require("mongoose");
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);



//const blogRoutes = express.Model("blog-routes",getAllBlogs,addBlog,updateBlog,getById,deleteBlog);
module.exports = blogRouter;
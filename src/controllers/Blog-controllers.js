const Blog = require ("../model/Blog");

 const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
       blogs = await Blog.find();
    } catch (err) {
        return console.log(err)
    }
    if (!blogs) {
        return res.status(404).json({message: "No Blogs Found"})
    }
    return res.status(200).json({blogs})
};

 const addBlog = async (req, res, next) => {
    const { title, description, image, auther } = req.body;
    const blog = new Blog({
        title,
        description,
        image,
        auther,
    });
    try {
       await blog.save();
    }catch (err) {
        return console.log(err);
    }
    return res.status(200).json({blog});
};

 const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
   blog = await Blog.findByIdAndUpdate(blogId, {
   title,
   description
  });
}catch (err) {
    return console.log(err);
}
if (!blog) {
    return res.status(500).json({message: "Unable to Update the Blog"});
}
return res.status(200).json({ blog });
};

 const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(id);
    }catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(404).json({message: " No Blog Found" });
    }
    return res.status(200).json({ blog });
};

 const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id);
    }catch (err) {
        console.log(err);
    }
    if (!blog) {
        return res.status(500).json({message: "Unable to delete" });
    }
    return res.status(200).json({ message:"Successfully Delete"});
};

module.exports = {getAllBlogs,addBlog,updateBlog,getById,deleteBlog}
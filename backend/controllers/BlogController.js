const blogService = require('../services/BlogService');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.json({
            data: blogs, 
            status: 'success'
        });
    } catch (err) {
        res.status(500).json({err: err.message});
    }
}

exports.createBlog = async (req, res) => {
    try {
       const blog = await blogService.createBlog(req.body);
       res.json({
            data: blog, 
            status: 'Success'
       }) 
    } catch (err) {
        res.status(500).json({err: err.message});
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id);
        res.json({
            data: blog, 
            status: 'Success'
        })   
    } catch (err) {
       res.status(500).json({err: err.message}) 
    }
}

exports.updateBlog = async (req, res) => {
    try {
       const blog = await blogService.updateBlog(req.params.id, req.body);
       res.json({
            data: blog, 
            status: 'Success'
       }) 
    } catch (err) {
       res.status(500).json({err: err.message}) 
    }
}

exports.deleteBlog = async (req, res) => {
    try {
       const blog = await blogService.deleteBlog(req.params.id);
       res.json({
            data: blog, 
            status: 'Success'
       }) 
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}

// the exports.function syntax - other ways of expressing the module exports 
// ? why id takes params and body doesn't i.e req.params.id and req.body 
//

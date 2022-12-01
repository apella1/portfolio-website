const {findByIdAndDelete} = require('../models/Blog');
const BlogModel = require('../models/Blog');

exports.getAllBlogs = async () => {
    return await BlogModel.find();
}

exports.createBlog = async (blog) => {
    return await BlogModel.create(blog);
}

exports.getBlogById = async (id) => {
    return await BlogModel.findById(id);
}

exports.updateBlog = async (id, blog) => {
    return await BlogModel.findByIdAndUpdate(id, blog);
} 

exports.deleteBlog = async (id) => {
    return await BlogModel.findByIdAndDelete(id);
}

// for the blog model, the defined preexisting functions - find, create, findById, findByIdAndDelete, findByIdAndUpdate methods 


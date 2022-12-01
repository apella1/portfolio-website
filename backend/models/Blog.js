const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: String,
    body: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

module.exports = mongoose.model('Blog', blogSchema);

// ? how is the schema definition different from a typescript object
// ? model export - the arguments that are passed in 

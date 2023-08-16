const mongoose = require('mongoose');
const blogPostSchema = mongoose.Schema(
    {
        title: { type: String },  // Changed from "type: string"
        content: { type: String },  // Changed from "type: string"
        author: { type: String },  // Changed from "type: string"
        CreatedDate: { type: Date, default: Date.now }
    },
    { versionKey: false },
);

const BlogPostModel = mongoose.model('BlogPostModel', blogPostSchema);
module.exports = BlogPostModel;

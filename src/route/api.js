const express = require('express');
const BlogPostController = require('../controller/BlogPostController');
const router = express.Router();

// API ROUTER END POINT
// C = Create 
router.post('/CreateProduct', BlogPostController.CreateProduct);

// R = Read 
router.post('/ReadProduct', BlogPostController.ReadProduct);


router.post('/ReadProductById/:id', BlogPostController.ReadProductById);

// U = Update 
router.post('/UpdateProduct/:id', BlogPostController.UpdateProduct);

// D = Delete 
router.delete('/DeleteProduct/:id', BlogPostController.DeleteProduct);

module.exports = router;

const BlogPostModel = require('../model/BlogPostModel');
const { deleteOne } = require("mongoose");

// C = Create
exports.CreateProduct = async (req, res) => {
    try {
        const newProduct = await BlogPostModel.create(req.body);
        res.status(200).json({ status: 'success', data: newProduct });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}

// C = Create old version

// exports.CreateProduct = (req, res) => {
//     let reqBody = req.body;
//     BlogPostModel.create(reqBody, (err, data) => {
//         if (err) {
//             res.status(400).json({ status: 'fail', data: err })
//         } else {
//             res.status(200).json({ status: 'success', data: data })
//         }
//     });
// }

// R = Read
exports.ReadProduct = async (req, res) => {
    try {
        // console.log("ReadProduct function called"); // Check if the function is being called
        const products = await BlogPostModel.find({}, 'title author content');
        console.log("Fetched products:", products); // Check if products are being fetched correctly
        res.status(200).json({ status: 'success', data: products });
    } catch (err) {
        console.error("Error:", err); // Check if any errors are occurring
        res.status(400).json({ status: 'fail', data: err });
    }
}


// R = Read old version

// exports.ReadProduct = (req, res) => {
//     let Query = {};
//     let Projection = "ProductName ProductCode Img UnitPrice Qty TotalPrice";
//     BlogPostModel.find(Query, Projection, (err, data) => {
//         if (err) {
//             res.status(400).json({ status: 'fail', data: err })
//         } else {
//             res.status(200).json({ status: 'success', data: data })
//         }
//     })

// RD = Read Product Details
exports.ReadProductById = async (req, res) => {
    try {
      const productId = req.params.id; // Get the product ID from the URL parameter
      const product = await BlogPostModel.findById(productId);
  
      if (!product) {
        return res.status(404).json({ status: 'fail', message: 'Product not found' });
      }
  
      console.log("Fetched product:", product);
      res.status(200).json({ status: 'success', data: product });
    } catch (err) {
      console.error("Error:", err);
      res.status(400).json({ status: 'fail', data: err });
    }
  };

// U = Update
exports.UpdateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProduct = await BlogPostModel.updateOne({ _id: id }, req.body);
        res.status(200).json({ status: 'success', data: updatedProduct });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}

// U = Update old version

// exports.UpdateProduct = (req, res) => {
//     const id = req.params.id;
//     let Query = { _id: id };
//     let reqBody = req.body;

//     BlogPostModel.updateOne(Query, reqBody, (err, data) => {
//         if (err) {
//             res.status(400).json({ status: 'fail', data: err })
//         } else {
//             res.status(200).json({ status: 'success', data: data })
//         }
//     });
// }

// D = Delete
// exports.DeleteProduct = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const deletedProduct = await BlogPostModel.remove({ _id: id });
//         res.status(200).json({ status: 'success', data: deletedProduct });
//     } catch (err) {
//         res.status(400).json({ status: 'fail', data: err });
//     }
// }


// D = Delete  old version

// exports.DeleteProduct = (req, res) => {
//     const id = req.params.id;
//     let Query = { _id: id };

//     BlogPostModel.remove(Query, (err, data) => {
//         if (err) {
//             res.status(400).json({ status: 'fail', data: err })
//         } else {
//             res.status(200).json({ status: 'success', data: data })
//         }
//     });
// }

exports.DeleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProduct = await BlogPostModel.deleteOne({ _id: id });
        res.status(200).json({ status: 'success', data: deletedProduct });
    } catch (err) {
        res.status(400).json({ status: 'fail', data: err });
    }
}

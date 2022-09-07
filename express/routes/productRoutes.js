const express = require("express");
const productController = require("./../controllers/productController");
const productRoutes = express.Router();

//routes
productRoutes
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct);
productRoutes.route("/:id").get(productController.getProductById);

//EDIT 
//.post(productController.editProduct);
productRoutes.route("/:id").put(productController.editProduct);
//DEL
//.post(productController.deleteProduct);
productRoutes.route("/:id").delete(productController.deleteProduct);

module.exports = productRoutes;

import express from "express";
import controllerProducts from "./controller.products.js";

const routerProduct = express.Router();

routerProduct.get('/', controllerProducts.getProducts);

routerProduct.get('/:id', controllerProducts.getProduct);

routerProduct.post('/', controllerProducts.addProduct);

routerProduct.patch('/:id', controllerProducts.updateProduct);

routerProduct.delete('/:id', controllerProducts.deleteProduct);




export default routerProduct;
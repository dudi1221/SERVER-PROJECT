import serviceProducts from "./service.products.js";

const getProducts = async (req, res) => {
    try {
        const products = await serviceProducts.getProducts();
        res.send(products);
    } catch(err) {
        res.send('Error server');
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await serviceProducts.getProduct(id);
        res.status(200).json(product);
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}

const addProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        await serviceProducts.addProduct(newProduct);
        res.status(200).json({"message": 'Product added successfully'});
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}

const updateProduct = async (req, res) => {
    try {
        const productUpdate = req.body;
        const { id } = req.params;
        await serviceProducts.updateProduct(productUpdate, id);
        res.status(200).json({"message": 'Product updated successfully'});
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await serviceProducts.deleteProduct(id);
        res.status(200).json({"message": 'Product deleted successfully'});
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}



const controllerProducts = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}

export default controllerProducts;
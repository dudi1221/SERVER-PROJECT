import dalProducts from "./dal.products.js";

const getProducts = async () => {
    try {
        const products = await dalProducts.getProducts();
        return products;
    } catch(err) {
        return 'Error service';
    }
}

const getProduct = async (id) => {
    try {
        const product = await dalProducts.getProduct(id);
        return product;
    } catch(err) {
        return'Error service';
    }
}

const addProduct = async (newProduct) => {
    try {
        await dalProducts.addProduct(newProduct);
    } catch(err) {
        return 'Error service';
    }
}

const updateProduct = async (productUpdate, id) => {
    try {
        await dalProducts.updateProduct(productUpdate, id);
    } catch(err) {
        return 'Error service';
    }
}

const deleteProduct = async (id) => {
    try {
        await dalProducts.deleteProduct(id);
    } catch(err) {
        return 'Error service';
    }
}



const serviceProducts = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}

export default serviceProducts;
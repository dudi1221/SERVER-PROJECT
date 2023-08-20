import fs from "fs";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);

const getProducts = async () => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf-8');
        return dataAsync;
    } catch (err) {
        throw err;
    }
}

const getProduct = async (id) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf-8');
        const json = JSON.parse(dataAsync);
        const product = json.find(product => id === String(product.id));
    if (product) {
        return product;
    } else {
        return 'Product not found';
    }
    } catch(err) {
        return 'Error reding data';
    }
}

const writeFileAsync = promisify(fs.writeFile);

const addProduct = async (newProduct) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf-8');
        const data = JSON.parse(dataAsync);
        data.push(newProduct);
        const newProducts = JSON.stringify(data);
        await writeFileAsync('./data.json', newProducts);
    } catch(err) {
        return 'Error reding data';
    }
}

const updateProduct = async (productUpdate, id) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf-8');
        const data = JSON.parse(dataAsync);
        const products = data.findIndex(product => id === String(product.id));
        if (products !== -1) {
            data[products] = { ...data[products], ...productUpdate };
            const updatedProduct = JSON.stringify(data);
            await writeFileAsync('./data.json', updatedProduct);
        } else {
            return 'Product not found';
        }
    } catch(err) {
        return 'Error reding data';
    }
}

const deleteProduct = async (id) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf-8');
        const data = JSON.parse(dataAsync);
        const products = data.findIndex(product => id === String(product.id));
        if (products !== -1) {
            delete data[products];
            const updatedProductList = JSON.stringify(data);
            await writeFileAsync('./data.json', updatedProductList);
        } else {
            return 'Product not found';
        }
    } catch (err) {
        return 'Error reding data';
    }
}



const dalProducts = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}

export default dalProducts;
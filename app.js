import express from "express"
import morgan from 'morgan';
import routerProduct from "./modules/api/products/routes.products.js";
import routerUser from "./modules/api/users/routes.users.js";

const app = express()
const port = 3000

app.use(morgan('tiny'));

app.use(express.json());

app.use('/api/products', routerProduct);

app.use('/api/users', routerUser);



app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
})
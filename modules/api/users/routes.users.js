import express from "express";

const routerUser = express.Router();

routerUser.post('/signUp', addUser);

routerUser.post('/logIn', testUser);



export default routerUser;
import express from "express";
import controllerUsers from "./controller.users.js";

const routerUser = express.Router();

routerUser.post('/signUp', controllerUsers.addUser);

routerUser.post('/logIn', controllerUsers.testUser);

routerUser.get('/', controllerUsers.getAllUsers);

routerUser.get('/:id', controllerUsers.getUser);

export default routerUser;
import serviceUsers from "./service.users.js";

const addUser = async (req, res) => {
    try {
        const newUser = req.body;
        const service = await serviceUsers.addUser(newUser);
        res.status(200).json({service})//{"message": 'User added successfully'});
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}

const testUser = async (req, res) => {
    try {
        const user = req.body;
        const userLogIn = await serviceUsers.testUser(user);
        res.json({message: userLogIn});
    } catch(err) {
        res.json('Error server', err);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const user = req.query;
        const users = await serviceUsers.getAllUsers(user);
        res.json({users});
    } catch(err) {
        console.error('Error server', err);
        res.json('Error server');
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const endUser = req.query;
        const user = await serviceUsers.getUser(+(id), endUser);
        res.status(200).json({user});
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}



const controllerUsers = {
    addUser,
    testUser,
    getAllUsers,
    getUser
}

export default controllerUsers;
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



const controllerUsers = {
    addUser,
    testUser
}

export default controllerUsers;
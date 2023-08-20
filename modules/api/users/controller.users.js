import serviceUsers from "./service.users";

const addUser = async (req, res) => {
    try {
        const newUser = req.body;
        await serviceProducts.addUser(newUser);
        res.status(200).json({"message": 'User added successfully'});
    } catch(err) {
        res.status(404).json({"Error server": err});
    }
}



const controllerUsers = {
    addUser,
}

export default controllerUsers;
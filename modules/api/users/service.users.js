import dalUsers from "./dal.users.js";

const addUser = async (newUser) => {
    try {
        const saltRounds = 10;
        bcrypt.hash(newUser.password, saltRounds, async function(err, hash) {
        if (err) {
            return 'The password is not sufficiently encrypted';
        } else if (isUserEmailValid(newUser.email) && isStrongPassword(newUser.password)) {
            await dalUsers.addUser(newUser);
            newUser.password = hash;
            return 'The user added successfully';
        } else {
            return 'Invalid email or password address';
        }
        });
    } catch(err) {
        return 'Error service';
    }
}




const serviceUsers = {
    addUser,
}

export default serviceUsers;
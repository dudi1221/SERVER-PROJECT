import dalUsers from "./dal.users.js";
import bcrypt from 'bcrypt';

const addUser = async (newUser) => {
    try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(newUser.password, saltRounds);

        if (isUserEmailValid(newUser.email) && isStrongPassword(newUser.password)) {
            newUser.password = hash;
            await dalUsers.addUser(newUser);
            return 'The user added successfully';
        } else {
            return 'Invalid password or email address';
        }
    } catch (err) {
        console.error(err);
        return 'Error adding user';
    }
}

const testUser = async (user) => {
    try {
        const LogIn = await dalUsers.testUser(user);
        return LogIn;
    } catch(err) {
        return 'Error service', err;
    }
}



function isUserEmailValid(userEmail) {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(userEmail);
}

function isStrongPassword(userPassword) {
    if (userPassword.length < 8) {
      return false;
    }
    if (!/[a-z]/.test(userPassword)) {
      return false;
    }
    if (!/[A-Z]/.test(userPassword)) {
      return false;
    }
    return true;
}



const serviceUsers = {
    addUser,
    testUser
}

export default serviceUsers;
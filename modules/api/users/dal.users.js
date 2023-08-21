import fs from "fs";
import { promisify } from "util";
import bcrypt from 'bcrypt';

const readFileAsync = promisify(fs.readFile);

const writeFileAsync = promisify(fs.writeFile);

const addUser = async (newUser) => {
    try {
        const dataAsync = await readFileAsync('./users.data.json', 'utf-8');
        const users = JSON.parse(dataAsync);
        users.push(newUser);
        const data = JSON.stringify(users);
        await writeFileAsync('./users.data.json', data);
            return 'User added successfully';
    } catch(err) {
        return 'Error reding data';
    }
}

// const testUser = async (user) => {
//     try {
//         const dataAsync = await readFileAsync('./users.data.json', 'utf8');
//         const jsonData = JSON.parse(dataAsync);
//         for (const element of jsonData) {
//             console.log(element.email === user.email, await bcrypt.compare(user.password, element.password));
//             console.log(element.email, user.email);
//             if (element.email === user.email && await bcrypt.compare(user.password, element.password)) {
//                 return "The user logged in successfully";
//             }
//         }
//         return "The email or password is incorrect, please try again...";
//     } catch (err) {
//         console.error('Error:', err);
//         return "An error occurred";
//     }
// }

const testUser = async (user) => {
    try {
        const dataAsync = await readFileAsync('./users.data.json', 'utf-8');
        const users = JSON.parse(dataAsync);
        for (const element of users) {
            const correctEmail = user.email === element.email;
            const correctPassword = await bcrypt.compare(user.password, element.password);
            if (correctEmail && correctPassword) {
                return 'The user has successfully logged in';
            }
        }
        return 'The email or password is incorrect';
    } catch(err) {
        return 'Error reading data' + err;
    }
}

const getAllUsers = async (user) => {
    try {
        const dataAsync = await readFileAsync('./users.data.json', 'utf-8');
        const json = JSON.parse(dataAsync);
        const accessPermissionCheck = json.find(element => user.email === element.email && user.password === element.password && element.isAdmin === true);
        if (accessPermissionCheck) {
            const userData = json.map(element => (`id: ${element.id}, email: ${element.email}, password: ${element.password}, isAdmin: ${element.isAdmin}`));
            return userData;
        } else {
            return 'No access permission. For access permission contact Joel...';
        }
    } catch (err) {
        throw err;
    }
}



const dalUsers = {
    addUser,
    testUser,
    getAllUsers
}

export default dalUsers;
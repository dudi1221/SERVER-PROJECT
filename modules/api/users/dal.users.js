import fs from "fs";
import { promisify } from "util";

const writeFileAsync = promisify(fs.writeFile);

const addUser = async (newUser) => {
    try {
        const dataAsync = await readFileAsync('./users.data.json', 'utf-8');
        console.log(newUser);
        const json = JSON.parse(dataAsync);
        const user = json.map(element => (`id: ${element.id}, email: ${element.email}, password: ${element.password}, isAdmin: ${element.isAdmin}`));
        user.push(newUser);
        await writeFileAsync('./data.json', user, (err) => {
            if(err) return 'Error in update data';
            else return 'User added successfully';
        });
        
    } catch(err) {
        return 'Error reding data';
    }
}


const dalUsers = {
    addUser,
}

export default dalUsers;
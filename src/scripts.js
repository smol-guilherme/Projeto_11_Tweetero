import users from "./users.js";

export function handleSignUp(obj) {
    console.log(users)
    const isNameTaken = users.find((item) => {
        if(item.username === obj.username) {
            return true;
        }
        return false;
    })
    if(isNameTaken) {
        return console.error('Usuário já existe');
    }
    users.push(obj)
    return console.log('OK');
}
import users from "./users.js";
import tweets from "./tweets.js"

export function handleSignUp(obj) {
    const isNameTaken = users.find((item) => {
        if(item.username === obj.username) {
            return true;
        }
    })
    if(isNameTaken) {
        return 'Usuário já existe';
    }
    users.push(obj)
    return 'OK';
}

export function handleTweet(obj) {
    tweets.unshift(obj)
    return 'OK';
}

export function handleDisplayTweet() {
    const data = [];
    let i = 0;
    let postData;
    let avatar;
    const MAXLENGTH = tweets.length > 10 ? 10 : tweets.length;
    while (i < MAXLENGTH) {
        postData = tweets[i];
        avatar = getAvatar(postData.username)
        data.unshift({ ...postData, avatar: avatar.avatar })
        i++;
    }
    return data;
}

function getAvatar(name) {
    return users.find((user) => user.username === name);
}
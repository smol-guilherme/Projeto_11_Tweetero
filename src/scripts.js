import users from "./users.js";
import tweets from "./tweets.js"

function handleSignUp(obj) {
    if(obj.username === '' || obj.avatar === '') {
        return 'empty';
    }
    const isNameTaken = users.find((item) => {
        if(item.username === obj.username) {
            return true;
        }
    })
    if(isNameTaken) {
        return 'duplicate';
    }
    users.push(obj)
    return 'OK';
}

function handleTweet(obj) {
    if(obj.username === '' || obj.tweet === '') {
        return 'empty';
    }
    tweets.unshift(obj)
    return 'OK';
}

function handleDisplayTweet() {
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

function handleShowAllTweets(username) {
    const avatar = getAvatar(username).avatar;
    console.log(avatar)
    const userTweets = tweets.filter((tweet) => {
        if (tweet.username === username) {
            tweet.avatar = avatar;
            return tweet
        }
        return null
    })
    console.log(userTweets);
    return userTweets;
}

const scripts = {
    handleDisplayTweet,
    handleSignUp,
    handleTweet,
    handleShowAllTweets
};
export default scripts;
import users from "./users.js";
import tweets from "./tweets.js"

export function handleSignUp(obj) {
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
    console.log(users)
    return console.log('OK');
}

export function handleTweet(obj) {
    tweets.push(obj)
    console.log(tweets)
    return console.log('OK');
}

export function handleDisplayTweet() {
    const tweetData = []
    let i = 0
    let tweet;
    let avatar;
    console.log(tweets)
    // while (i < 10 || i < tweets.length) {
    //     tweet = tweets[i];
    //     console.log(tweet)
    //     avatar = users.find((user) => {
    //         if(user.username === tweet.username) {
    //             return user
    //         }
    //     });
    //     tweetData.push({ ...tweet, avatar: avatar.avatar })
    //     i++;
    // }
    // return tweetData;
}

function getAvatar(name) {
    const avatar = users.find((user) => {
        if(user.username === name) {
            return user.avatar
        }
    })
    return avatar;
}
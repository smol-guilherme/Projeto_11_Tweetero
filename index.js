import express from "express";
import cors from "cors";
import { handleSignUp, handleTweet, handleDisplayTweet } from "./src/scripts.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/tweets', (req, res) => {
    res.send(handleDisplayTweet())
});

app.post('/sign-up', async(req, res) => {
    const newUser = req.body
    try {
        handleSignUp(newUser)
        res.send('OK');
    } catch {
        res.send('Error')
    }
})

app.post('/tweets', async(req, res) => {
    const newTweet = req.body;
    try {
        handleTweet(newTweet)
        res.send('OK')
    } catch {
        res.send('Error')
    }
})

app.listen(5000);
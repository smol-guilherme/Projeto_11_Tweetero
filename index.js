import express from "express";
import cors from "cors";
import scripts from "./src/scripts.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/tweets', (req, res) => {
    const { handleDisplayTweet } = scripts
    res.send(handleDisplayTweet())
});

app.get('/tweets/:username', (req, res) => {
    const user = req.params.username
    const { handleShowAllTweets } = scripts
    res.send(handleShowAllTweets(user))
})

app.post('/sign-up', async(req, res) => {
    const newUser = req.body
    const { handleSignUp } = scripts
    switch(handleSignUp(newUser)) {
        case 'OK':
            return res.status(201).send('OK');
        case 'duplicate':
            return res.status(400).send('Usuário já existe');
        case 'empty':
            return res.status(400).send('Todos os campos são obrigatórios');
        default:
            return res.status(400).send('Erro desconhecido');
    }
})

app.post('/tweets', async(req, res) => {
    const newTweet = req.body;
    const { handleTweet } = scripts
    switch(handleTweet(newTweet)) {
        case 'OK':
            return res.status(201).send('OK');
        case 'empty':
            return res.status(400).send('Todos os campos são obrigatórios');
        default:
            return res.status(400).send('Erro desconhecido');
    }
})

app.listen(5000);
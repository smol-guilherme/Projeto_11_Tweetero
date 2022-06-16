import express from "express";
import cors from "cors";
import scripts from "./src/scripts.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get(`/tweets`, (req, res) => {
    const { handleDisplayTweets, handlePage } = scripts
    if(handlePage(req.query.page)) {
        return res.send(handleDisplayTweets(req.query.page))
    }
    return res.status(400).send('Informe uma página válida!')
});

app.get(`/tweets/:username`, (req, res) => {
    const user = req.params.username
    console.log(req.query.page)
    const { handleShowAllTweets } = scripts
    return res.send(handleShowAllTweets(user))
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
    newTweet.username = req.header('user')
    const { handleTweet } = scripts
    console.log(newTweet)
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
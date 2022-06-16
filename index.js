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
import express from "express";
import cors from "cors";
import { handleSignUp } from "./src/scripts.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/tweets', (req, res) => {

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

app.listen(5000);
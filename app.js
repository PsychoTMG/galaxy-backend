import express from "express";
import { config } from "dotenv"
import "./source/module/__loaddatabase.js";

config()

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('изменения для теста')
})

app.listen(port, () => console.log(`сервер работает на порту ${port} `))
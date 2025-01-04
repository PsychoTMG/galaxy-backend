import express from "express";
import { config } from "dotenv"
import "./source/module/__loaddatabase.js";
import { allUsers } from "./source/controllers/users.js";

config()

const app = express()
const port = 8000

app.get('/', allUsers)

app.listen(port, () => console.log(`сервер работает на порту ${port} `))
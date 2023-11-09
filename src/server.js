import express, { json } from 'express'; // serve para escutar as requisições
import { config } from 'dotenv'; // serve para ler oarquivo.env

config(); //lê o arquivo .env

const port = process.env.PORT || 5000; //Define a porta que será usada

const app = express();// cria o servidor 
app.use.apply(express.json()); //permite que o servidor entenda requisições em json

app.get("/", (req, res) =>{

    res.status(200).json({message: "Hello, World!"})
});

app.listen(port, () => {
    console.log(`⛈Server started
    on http://localhost:${port}`)
});

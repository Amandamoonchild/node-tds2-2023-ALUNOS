import express, { json } from 'express'; // serve para escutar as requisições
import { config } from 'dotenv'; // serve para ler oarquivo.env

config(); //lê o arquivo .env

const port = process.env.PORT || 5000; //Define a porta que será usada

const app = express();// cria o servidor 
app.use(express.json()); //permite que o servidor entenda requisições em json


app.get("/:nome/:sobreNome/:idade/:signo", (req, res) => {
    const nome = req.params.nome;
    const sobreNome = req.params.sobreNome;
    const idade= req.params.idade;
    const sgin = req.params.signo;
    res.status(200).json({"meu nome é": `${nome} ${sobreNome} ${idade}  ${sgin}`})
});

app.post("/", (req, res) =>{
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    res.status(200).json({ nomeUsuario: nome, sobrenomeUsuario: sobrenome, idadeUsuario: idade,})
});

app.put("/", (req, res) =>{
    res.status(200).json({ message: "Hello, put" })
});

app.delete("/", (req, res) =>{
    res.status(200).json({ message: "Hello, delete" })
});

app.listen(port, () => {
    console.log(`🌙Server started on http://localhost:${port}`)
});

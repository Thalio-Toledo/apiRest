import express from  'express';
import db from './config/dbConnect.js';
// import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'erro de conexão'))

db.once("open",()=>{
    console.log('Conexão com o banco feita com sucesso!')
})

const app = express();
app.use(express.json())

routes(app)

// const livros = [
//     {
//         id:1,
//         titulo: "Cangaceiro Javascript",
//     },
//     {
//         id:2,
//         titulo: "Roube como um artista",
//     }
// ]

// app.get('/',(req,res)=>{
//     res.status(200).send("Curso de node")
// })

// app.get('/livros',(req,res)=>{
//     Livros.find((err,livros)=>{
//         res.status(200).json(livros)
//     })
   
// })
// app.get('/livros/:id',(req,res)=>{
//     const index = buscaLivro(req.params.id);
//     res.json(livros[index])

// })

// app.post('/livros',(req,res)=>{
//     livros.push(req.body)
//     res.status(201).send('Livro cadastrado com sucesso')
// })

// app.put('/livros/:id',(req,res)=>{
//     const index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.send('Livro Atualizado com sucesso!')

// })

// app.delete('/livros/:id',(req,res)=>{
//     let {id} = req.params;
//     const index = buscaLivro(id);
//     livros.splice(index,1)
//     res.send(`Livro ${id} removido com sucesso`)
// })

// function buscaLivro(id){
//     return livros.findIndex(livro =>  livro.id == id) //O método findIndex executa a função callback uma vez para cada elemento presente no array até encontrar um onde o callback retorna um valor verdadeiro. Se tal elemento for encontrado, findIndex imediatamente retorna o índice deste elemento.

// }

export default app
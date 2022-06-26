const express = require('express')
const connection = require('./db/connectionDb');
connection()
const app = express();

app.use(express.json());

app.use(require('./routes/contactRouter'));
app.get('/', (req, res) =>{
    res.json({message:"Bienvenido"})
})

app.listen(3000, () =>{
    console.log("corriendo en el puerto 3000")
})
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/cmr";
const connectionToDB = () =>{

    mongoose.connect(url, (err) =>{
        if(err){
            console.log("error al conectar con la base de datos");
        }else
        console.log("conectado a la base de datos")
    });
}
    
module.exports = connectionToDB
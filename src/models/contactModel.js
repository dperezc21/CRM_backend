const { Schema, model } =require("mongoose");

const ContactModel = new Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type: String
    },
    cell:{
        type: String
    },
    date:{
        type: String
    },
    address:{
        type: String
    },
    typeContract:{
        type: String
    }
})

module.exports = model('Contact', ContactModel);
const contactModel = require("../models/contactModel");
const emailValidator = require('email-validator');


class ContactMiddleware{

    async numberContacts(req, res, next){
        try {
            const numberContacts = await contactModel.find({}).count();
            if(numberContacts > 9){
                return res.status(400).json({status:402, message:"limite de contactos alcanzados"})
            }
            next();
        } catch (error) {
            return res.status(500).json({status:500, message:error});
        }
    }
    
    name(req, res, next){
        const name = req.body.name ?? req.query.name;
        console.log(name)
        if(!name){
            return res.status(400).json({status:400, message:"nombre requerido"});
        }
        next();
    }
    
    async email(req, res, next){
        const email = req.body.email ?? req.query.email;
        try {
            if(!email){
                return res.status(400).json({status:400, message:"email requerido"});
                
            }
            if(!emailValidator.validate(email)){
                return res.status(400).json({status:400, message:"email invalido"});

            }
        } catch (error) {
            
            return res.status(500).json({status:500, message:error});
        }
    }

}

module.exports = new ContactMiddleware();
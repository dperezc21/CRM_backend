const { 
    insertContactService,
    getContactsService ,
    deleteContactService
} = require("../service/contactService");


class ContactController {

    insertContact(req, res){
        const data = req.body;
        try {
            const response = insertContactService(data);
            if(response.status == 200){
                res.status(200).json({status: 200, message: "Contacto guardado"});
            }
        } catch (error) {
            return res.status(500).json({status:500, message: error})
        }
    }

    async getContacts(req, res){
        try {
            const response = await getContactsService();
            if(response.status == 200){
                return res.status(200).json(response);
            }else if(response.status == 400){
                return res.status(400).json(response);
            }
            
        } catch (error) {
            return res.status(500).json({status:500, message:error})
        }
    }

    async deleteContact(req, res){
        const {id} = req.params;
        try {
            const response = await deleteContactService(id);
            if(response.status == 200){
                return res.status(200).json({status:200, message:response});
                
            }else{
                return res.status(400).json({status:400, message:response});
            }
        } catch (error) {
            return res.status(500).json({status:500, message:error});
        }
    }
    
    async updateContact(data){
        try {
            
        } catch (error) {
            return res.status(500).json({status:500, message:error});
        }
    }
}

module.exports = new ContactController;
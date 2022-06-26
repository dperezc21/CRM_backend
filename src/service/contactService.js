const contactModel = require("../models/contactModel");


class ContactService{

    insertContactService(data){

        try {
            const contact = new contactModel(data);
            contact.save();
            return {status: 200}
        } catch (err) {
            return new Error(err);
        }
    }

    async getContactsService(){
        try {
            const getContacts = await contactModel.find({});
            if(getContacts.length > 0) {
                return {status: 200, message: getContacts}
            }else{
                return {status: 400, message:"No hay contactos"}
            }
        } catch (error) {
            return new Error(error)
        }
    }

    async deleteContactService(id){
        try {
            const deleteContact = await contactModel.findByIdAndDelete({_id:id});
            if(deleteContact){
                return {status:200, message: "contacto eliminado"}
            }else{
                return {status: 400, message:"contactto no encontardo"}
            }
        } catch (error) {
            return new Error(error);
        }

    }

    async updateContactService(data){
        const {_id} = data;
        for (const iterator of data) {
            if(!data[iterator]){
                delete data[iterator];
            }
        }
        try {
            const updateContact = await contactModel.findByIdAndUpdate({_id}, data);
            if(updateContact){
                return {status:200, message:"contacto actualizado"}
            }
        } catch (error) {
            return new Error(error)
        }

    }
}

module.exports = new ContactService();


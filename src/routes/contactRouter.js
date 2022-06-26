const express = require('express');
const { 
    insertContact,
    getContacts,
    deleteContact,
    searchContacts
} = require('../controllers/contactController');

const {numberContacts, name, email} = require('../middleware/contactMiddleware')
const route = express.Router();

route.post('/insertContact',[numberContacts, name, email], insertContact);
route.get('/getContacts', getContacts);
route.delete('/deleteContact/:id', deleteContact);
route.get('/searchContacts/:data', searchContacts);

module.exports = route;

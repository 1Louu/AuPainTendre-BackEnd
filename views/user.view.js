const express = require('express');
const User = require ('../models/user.model.js');
const router = express.Router(); 
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller.js');



// Logique API CRUD 
// Récupérer les Users 

// TODO: AUTHENTIFICATION
router.get('/', getUsers); // Need to be restricted
router.get('/:id', getUser);

// Créer les Users
router.post('/', createUser);

// Mettre à jour un User
router.put('/:id', updateUser); // Need to be restricted

// Supprimer un User
router.delete('/:id', deleteUser); // Need to be restricted

module.exports = router;
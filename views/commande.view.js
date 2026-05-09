const express = require('express');
const Commande = require ('../models/commande.model.js');
const router = express.Router(); 
const {getCommandes, getCommande, createCommande, updateCommande, deleteCommande} = require('../controllers/commande.controller.js');

// Logique API CRUD 
// Récupérer les Commandes 
router.get('/', getCommandes);
router.get('/:id', getCommande);

// Créer les Commandes
router.post('/', createCommande);

// Mettre à jour un Commande
router.put('/:id', updateCommande);

// Supprimer un Commande
router.delete('/:id', deleteCommande);

module.exports = router;
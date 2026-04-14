const express = require('express');
const Plat = require ('../models/plats.model.js');
const router = express.Router(); 
const {getPlats, getPlat, createPlat, updatePlat, deletePlat} = require('../controllers/plats.controller.js');


// Logique API CRUD 
// Récupérer les plats 
router.get('/', getPlats);
router.get('/:id', getPlat);

// Créer les plats
router.post('/', createPlat);

// Mettre à jour un plat
router.put('/:id', updatePlat);

// Supprimer un plat
router.delete('/:id', deletePlat);

module.exports = router;
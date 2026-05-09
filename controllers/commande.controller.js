const Commande = require('../models/commande.model')

const getCommandes = async (req, res) => {
    try{
        const commandes = await Commande.find({}); 
        res.status(200).json(commandes)
    } catch (error)  {
        res.status(500).json({ message: error.message });
    }
};

const getCommande = async (req, res) => {
    try{
        const { id } = req.params; 
        const commande = await Commande.findById(id); 
        res.status(200).json(commande)
    } catch (error)  {
        res.status(500).json({ message: error.message });
    }
};

const createCommande = async (req, res) => {
    try {
        const commande = await Commande.create(req.body);
        res.status(200).json(commande);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateCommande = async (req, res) => {
    try {
        const { id } = req.params; 

        const commande = await Commande.findByIdAndUpdate(id, req.body);

        if(!commande){
            return res.status(404).json({ message: "Le commande n'a pas pu être trouvé"});
        }

        const updatedCommande = await Commande.findById(id); 
        res.status(200).json(updatedCommande);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteCommande = async (req,res) => {
    try {
        const { id } = req.params;

        const commande = await Commande.findByIdAndDelete(id);

        if(!commande){
            return res.status(404).json({message: "Le commande n'a pas pu être trouvé"});
        }

        res.status(200).json({message: "Le commande a été supprimé"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getCommandes, 
    getCommande,
    createCommande,
    updateCommande,
    deleteCommande
}
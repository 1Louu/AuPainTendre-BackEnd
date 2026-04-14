const Plat = require('../models/plats.model')

const getPlats = async (req, res) => {
    try{
        const plats = await Plat.find({}); 
        res.status(200).json(plats)
    } catch (error)  {
        res.status(500).json({ message: error.message });
    }
};

const getPlat = async (req, res) => {
    try{
        const { id } = req.params; 
        const plat = await Plat.findById(id); 
        res.status(200).json(plat)
    } catch (error)  {
        res.status(500).json({ message: error.message });
    }
};

const createPlat = async (req, res) => {
    try {
        const plat = await Plat.create(req.body);
        res.status(200).json(plat);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updatePlat = async (req, res) => {
    try {
        const { id } = req.params; 

        const plat = await Plat.findByIdAndUpdate(id, req.body);

        if(!plat){
            return res.status(404).json({ message: "Le plat n'a pas pu être trouvé"});
        }

        const updatedPlat = await Plat.findById(id); 
        res.status(200).json(updatedPlat);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deletePlat = async (req,res) => {
    try {
        const { id } = req.params;

        const plat = await Plat.findByIdAndDelete(id);

        if(!plat){
            return res.status(404).json({message: "Le plat n'a pas pu être trouvé"});
        }

        res.status(200).json({message: "Le plat a été supprimé"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getPlats, 
    getPlat,
    createPlat,
    updatePlat,
    deletePlat
}
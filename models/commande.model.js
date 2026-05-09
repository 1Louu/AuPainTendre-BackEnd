const mongoose = require('mongoose')

const CommandeSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Veuillez entrer le nom du plat"],
        },

        quantity:{
            type: Number, 
            required: true, 
            default: 0,
        },

        price: {
            type: Number, 
            required: true, 
            default: 1,
        }, 

        description: {
            type: String, 
            required: true,
            default: "Texte vide",
        }
    }
)

const Commande = mongoose.model("Commande", CommandeSchema);

module.exports = Commande; 
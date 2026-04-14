const mongoose = require('mongoose')

const PlatSchema = new mongoose.Schema(
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

const Plat = mongoose.model("Plat", PlatSchema);

module.exports = Plat; 
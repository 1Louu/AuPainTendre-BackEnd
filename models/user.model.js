const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Veuillez entrer le nom du préparateur."],
        },

        email:{
            type: String, 
            required:[ true, "Veuillez entrer un email valide."],
        },
        passwordHash:{
            type: String, 
            required: [true, "Veuillez entrer un mot de passe."],
        },
        role: {
            type:String,
            required: [true, "Veuillez définir votre rôle"]
        }
    }
)

const User = mongoose.model("User", UserSchema);

module.exports = User; 
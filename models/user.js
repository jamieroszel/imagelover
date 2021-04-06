// Import Schema and model
const {Schema, model} = require('../db/connection')

// The Image Schema
const Image = new Schema ({
    text: String
})

// The User Schema
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    // The image property defined as an array of objects that matches the Image schema
    images: [Image],
},
{timestamps: true}
)

// The User Model
const user = model("user", UserSchema)

// Export the User Model
module.exports = user;
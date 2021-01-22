const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        minlength:3,
        required: true,
        trim : true,
        unique: true
    }
},{
    timestamps:true
})

const User = mongoose.model('User', userSchema)

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        default:0,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//Exporting Model
module.exports = mongoose.model('user',userSchema);
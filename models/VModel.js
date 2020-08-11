const mongoose = require('mongoose');
const Schema = mongoose.Schema
const VSchema = new Schema({
name: {
    type:String,
    required:true,
},
email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
password: {
    type:String,

},
phonenumber:{
    type:String,
    required:true
},
Date:{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model('v', VSchema)
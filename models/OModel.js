const mongoose = require('mongoose');
const Schema = mongoose.Schema
const OSchema = new Schema({
name: {
    type:String,
    required:true,
},

c_post:{
 type:String
},
address:{
    type:String,
    required:true
},
Date:{
    type:Date,
    default:Date.now
},
// img:{
//     data:Buffer,
//     type:String
// }
description:{
    type:Object,

},
o_id:{
    type:Number
},
candidates:{
    type:Array
}

})
module.exports = mongoose.model('o', OSchema)
const OModel = require('../models/OModel');

module.exports = {
    add: (req, res) => {
        let fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
        let candi ={
            "name" :" Talha ",
            "id": 10
        }
        let o = new OModel({
            name: req.body.name,
            c_post: req.body.c_post,
            address: req.body.address,
            description: req.body.description,
            o_id:fourdigitsrandom,
            candidates:candi,
        })
            
        console.log(fourdigitsrandom);
        console.log(o);
        o.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },


    update: (req, res) => {
        let candidate= [{
            "name" :" Hamza ",
            "id": 16
        }];
        OModel.findOneAndUpdate(

            { name: req.body.name }, 
         
            { $push: 
         
         { candidates: candidate  } },
         
           function (error, success) {
         
                 if (error) {
         
                     console.log(error);
         
                 } else {
         
                     console.log(success);
         
                 }
         
             }) .then(result => {
                res.json({ result: result})
            });
         
         
}
}
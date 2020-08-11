const ECModel = require('../models/ECModel');

module.exports = {
    signup: (req, res) => {
        let ec = new ECModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phonenumber: req.body.phonenumber
        })
        console.log(ec);
        ec.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
    ECModel.update({_id: req.body._id}, req.body)
    .then(ec => {
        if (!ec) res.json({ success: false, result: "No such ec exists"})
      
        res.json(ec)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    login: (req, res) => {
        const {email, password} = req.body
        ECModel.findOne({email, password})
        .then(ec => {
            if (ec.email === email && ec.password === password){ 
                res.json({ success: true, result: ec})
                console.log(ec.email);
            }
            else
            res.json({ sucess: false, result: "No Record"})
        })
        .catch(err => {
            res.json({ success: false, result: err})
            console.log(err)
        })
    },

    delete: (req, res) => {
        ECModel.remove({ _id: req.body._id})
        .then(ec => {
            if (!ec) res.json({ success: false, result: "No ec with such ID was found" })
            res.json({ success: true, result: ec })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}
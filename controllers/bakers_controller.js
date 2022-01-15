const express = require('express')
const router = express.Router()
const bakerModel = require('../models/baker')

router.get("/:id", (req,res) => {
    console.log(req.params.id)
    bakerModel.findOne({_id: req.params.id})
        .populate('breads')
        .then(baker => {
            res.render('bakers/bakerDetails', { baker })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

module.exports = router
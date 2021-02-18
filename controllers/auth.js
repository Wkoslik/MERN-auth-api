const bcrypt = require('bcrypt')
const express = require('express')
const db = require('../models')
const router = express.Router()

//URL prefix - '/api'


//signup - POST /api/signup
router.post('/signup', (req,res) =>{
    bcrypt.hash(req.body.password, 10) //do 10, 11, or 12
    .then(hash => db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
    }))
    .then(createdUser => res.json(createdUser))
    .catch(err =>{
        console.log(`🔥 error in the post signup`, err)
        res.json({ error: err})
    })
    // // res.json({ message: 'SIGNUP POST'})
    // db.User.create(req.body)
    // .then(user =>{
    //     res.json(user)
    // })
    // .catch(err =>{
    //     console.log('🔥 Error in the Post Signup', err)
    //     res.json({ 'error': err })
    // })
})

//login POST /api/login
router.post('/login', (req, res) =>{
    res.json({ message: 'LOGIN POST'})
})

module.exports = router;
const express = require('express')
const db = require('../models')
const router = express.Router()

//URL prefix - '/api'

//signup - POST /api/signup
router.post('/signup', (req,res) =>{
    // res.json({ message: 'SIGNUP POST'})
    db.User.create(req.body)
    .then(user =>{
        res.json(user)
    })
    .catch(err =>{
        console.log('🔥 Error in the Post Signup', err)
        res.json({ 'error': err })
    })
})

//login POST /api/login
router.post('/login', (req, res) =>{
    res.json({ message: 'LOGIN POST'})
})

module.exports = router;
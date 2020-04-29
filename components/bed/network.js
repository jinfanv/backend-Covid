const express = require('express')
const router = express.Router()
const controller = require('./controller')
const Response = require('../../response/responses')

router.get('/', (req,res) =>{

    controller.getBed()
    .then((beds) => {
        Response.success(req,res,beds,200)
    })
    
    .catch((e) =>{
        Response.error(req,res,'Unexpected Error', 500, e)
    })
    
})

router.post('/', (req,res) =>{
    controller.addBed(req.body.data)
    .then(()=>{
        Response.success(req,res,"Created",201)
    })
    .catch((e)=>{
        Response.error(req,res,"Invalide Data",500)
    })
})

module.exports = router
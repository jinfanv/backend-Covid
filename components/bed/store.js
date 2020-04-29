//Configuration Data Base

const Model = require('./model')
const db = require('../../db')
require('dotenv').config()

db.conect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-ytkbm.gcp.mongodb.net/apicovid?retryWrites=true&w=majority`)


//Methods to Get Bed
function add(data){
    const bed = new Model(data)
    bed.save()
}

async function get(filter) {

    return new Promise((resolve,reject)=>{
        
       let beds = Model.find()
       resolve(beds)            
    })   
} 

module.exports = {
    get,
    add
}
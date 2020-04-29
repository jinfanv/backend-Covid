const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const mySchema = new Schema({
    code: String,
    lat: Number,
    lng:Number, 
    beds: Number, 
    population: Number, 
    source: String,
    sourceUrl: String,
    typebed: Array
})

const model = mongoose.model('Bed',mySchema)

module.exports = model
const store = require("./store.js")


function getBed(filter) {
    return new Promise((resolve, reject) =>{
        resolve(store.get(filter))
    })
}

function addBed(data) {
    return new Promise((resolve, reject) =>{
        if (!data) {
            console.log("Not Date");
            return reject("Data Invalide")
        } else {
            store.add(data)
            return resolve(data)
        }
    })
}

module.exports ={
    getBed,
    addBed
}
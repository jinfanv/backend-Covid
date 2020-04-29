const db = require('mongoose')
db.Promise = global.Promise


async function conect(URL) {
    
 await db.connect(URL,{
        useNewUrlParser:true
        })
        .then(()=>{
            console.log('[DB] Conecta con exito');
        })
        .catch((e)=>{
            console.error('[DB] No conecto' + e);
        })
}

module.exports = {
    conect
}
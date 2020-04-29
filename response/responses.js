function success(req,res,message,status) {
    res.status(status || 200).send({
        response:"Successful petition",
        body:message
    })    
}

function error(req,res,detail,status) {
    res.status(status || 500).send({
        response:`[Failed request] ${detail}`        
    })    
}

module.exports = {
    success,
    error
}
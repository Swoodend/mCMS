const fs = require('fs');

function moveFileAndSend(oldPath, newPath, responseObj, res){
    //moves an image file to path and sends responseObj to be handled by client
    fs.rename(oldPath, newPath, () => {
        res.send(responseObj);
    });
}

module.exports = {
    moveFileAndSend: moveFileAndSend
}

function moveFileAndSend(fs, oldPath, newPath, responseObj, res){
    //moves an image file to path and sends responseObj to be handled by client
    fs.rename(oldPath, newPath, () => {
        res.send(responseObj);
    });
}

module.exports = {
    moveFileAndSend: moveFileAndSend
}
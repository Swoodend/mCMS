export function validateForm(form, type){
    //form['burl'].value ---> the value of the Blog URL input
    let requiredInputs;

    if (type === 'blog'){
        requiredInputs = ['burl', 'blog-header', 'bbc'];
    } else if (type === 'newsletter'){
        requiredInputs = ['nurl', 'news-header', 'npc'];
    } else {
        requiredInputs = ['aurl', 'article-header', 'apc'];
    }

    let urlRegex =  /[^0-9a-zA-Z-_]/g;
    let errorHash = {};

    //check that all required fields have some value
    for (let i = 0; i < requiredInputs.length; i++){
        let currentInput = requiredInputs[i];
        if (form[currentInput].value === ""){
            errorHash[currentInput] = "is a required value"
            return errorHash
        }
    }
    //otherwise check that blog URL has acceptable format
    let formHasBadUrl = form[requiredInputs[0]].value.match(urlRegex);
    if (formHasBadUrl){
        errorHash[requiredInputs[0]] = `url cannot contain ${formHasBadUrl[0]}`
    }

    return errorHash;
}
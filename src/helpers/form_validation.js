export function validateBlogForm(form){
    //form['burl'].value ---> the value of the Blog URL input
    let requiredInputs = ['burl', 'blog-header', 'bbc'];
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
    let formHasBadUrl = form['burl'].value.match(urlRegex)
    if (formHasBadUrl){
        errorHash['burl'] = `url cannot contain ${formHasBadUrl[0]}`
    }

    return errorHash;
}

export function validateNewsletterForm(){
    console.log("VALIDATING THE NEWSLETTER FORM");
}


export function validateArticleForm() {
    console.log("VALIDATING THE ARTICLE FORM");
}




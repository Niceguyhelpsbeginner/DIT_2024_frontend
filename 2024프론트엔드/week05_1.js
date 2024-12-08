function tagString(message, tagName = "p", className){
    if (className == undefined) {
        console.log(`<${tagName}> ${message}</>`);
    }
    else {
        console.log(`<${tagName} class = ${className}> ${message}</${tagName}>`);
    }
}
tagString("hello","h1","maintitle");

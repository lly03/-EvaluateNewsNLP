function checkForUrl(inputURL) {
    console.log("::: Running checkForName :::", inputURL);

    //setting the url regex
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const invalid = document.getElementById('invalid');

    //if the input matches the url regex, then don't display the invalid text, otherwise, display it
    if (inputURL.match(regex)) {
        console.log("Valid URL")
        invalid.style.display = "none";
    } else {
        console.log("Invalid URL! Doesn't match.")
        invalid.style.display = "inline";
    }
}

export { checkForUrl }

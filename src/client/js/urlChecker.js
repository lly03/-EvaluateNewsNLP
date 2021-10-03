function checkForUrl(inputURL) {
    console.log("::: Running checkForName :::", inputURL);
    const expression = new RegExp("https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)");

    if (!expression.test(inputURL)) {
        return false;
    } else {
        return true;
    }

}

export { checkForUrl }

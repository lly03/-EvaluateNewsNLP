// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)

//     console.log('::: Form Submitted :::')
//     fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

async function handleSubmit(event) {
    event.preventDefault()

    // check what url was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForUrl(formText);

    console.log("We are inside handleSubmit.")

    /**
     * first fetches the POST method from server
     * stringify the input into a "url", which is sent to server
     * response (api data) that was sent from the POST method is turned into json
     * input those data into html view
     */
    await fetch('/add', {
        method:"POST", 
        credentials: "same-origin",
        mode: "cors",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(result => {
        try{
            document.getElementById('agreement').innerHTML = result.agreement;
            document.getElementById('subjectivity').innerHTML = result.subjectivity;
            document.getElementById('confidence').innerHTML = `Confidence Rating: ${result.confidence}`;
            document.getElementById('irony').innerHTML = result.irony;
        }catch(e){
            console.log("error", e);
        }
    })
    .catch(e => console.log("error", e))

}

export { handleSubmit }

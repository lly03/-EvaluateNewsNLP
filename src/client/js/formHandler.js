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

function handleSubmit(event) {
    event.preventDefault()

    // check what url was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);
    Client.checkForName(formText)

    console.log('inside handleSubmit')

    const postData = async (url='', data={}) =>{
        const response = {
        method:'POST', 
        credentials: 'same-origin',
        headers:{ 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }

        try{
            const newData = await response.json();
            document.getElementById('results').innerHTML = newData.subjectivity;
        }catch(e){
            console.log('error',e)
        }
    }

    postData('/add',{name:formText})
}

export { handleSubmit }

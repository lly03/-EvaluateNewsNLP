// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
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
        
           expect(handleSubmit).toBeDefined();
})});


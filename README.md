# Evaluate News NLP

This project required me to implement an NLP API into a web application, while also applying webpack and other build tools onto it. The API that was used for this app is the <a href="https://www.meaningcloud.com/developer/sentiment-analysis">Open Sentiment Analysis (Meaning Cloud) API</a>.

## Usage

To use this app, you'll need to get an API from <a href="https://www.meaningcloud.com/developer/sentiment-analysis">Meaning Cloud</a>. Make sure you have node installed into your desktop, as you'll be using the **"npm"** command. So the first step is after you downloaded this file, you'll need to create an .env file, which should be in the same directory as the package.json. Then save your API_KEY into that file.

<img src="https://user-images.githubusercontent.com/86360050/135782936-1295016d-5705-416d-9a3c-0d9ff0277ac3.png" alt="screenshot of the .env file">

````
API_KEY=**********
````

Then you'll need to run 

````
npm install
````

on your terminal, so it has all the required packages. It should create a node_modules folder, so make sure you have that.
<img src="https://user-images.githubusercontent.com/86360050/135783126-11fe9ea2-4e98-4b9c-83bf-1729c9f7a5cd.png" alt="screenshot of the node_modules folder">

Afterwards in the terminal run the command

````
npm run build-prod
````
This command will create a dist folder that is in the same directory as your src folder, and the dist folder will have all your files in a webpack format. Another reason to run this command is because the server is pointed into that folder as well.

<img src="https://user-images.githubusercontent.com/86360050/135783343-bb666adc-589d-42e8-bf2c-82e7ad83effb.png" alt="screenshot of the dist folder">

To run the web application you can run:
````
npm start
````
in your terminal. Then in your browser, go to **localhost:8080** where your web app is at.

## Starter Code

I used a starter code provided by Udacity - <a href="https://github.com/udacity/fend/tree/refresh-2019" target="_blank">Link to the starter code</a>

This starter project has some HTML and CSS styling to display a static version of the Weather Journal App and some pre-written Javascript to get me started.

//Approaches
//There are two approaches you will leverage 
//to get the data from the network.

    //1. Fetch, a Web API available in browsers to fetch network resources.
    //2. Axios, a Promise based npm library for browser and node.js.

// CREATING A STATE.
//A state is simply an object that holds data pending to be rendered. 
//This is where we will store the output from the API call.

//The State Hook below will allow the use of state 
//in the <App> function component without writing a 
//separate class component. 
//userData is an object that is initially empty (useState({})). 
//Once the data is fetched from the network, it will contain 
//the user data (name, location, blog, and company). 
//setUserData is equivalent to writing this.setState() 
//to update the component state with the value of userData.

const [userData, setUserData] = useState({});

//Next is the Effect Hook, which will allow you to perform 
//side effect operations such as fetching data, clean up, or DOM manipulation. 
//useEffect() takes as argument a function that will execute after the first render 
//and after every component update. So this function is an apt place to call the 
//getGitHubUserWithFetch() function, whose job is to get the user data 
//from GitHub API and update the component. Passing a second argument 
//to useEffect is optional. Passing an empty array [] ensures this effect 
//will run just once; otherwise, it will run after every render.

useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

//getGitHubUserWithFetch() is an async function without implementation. 

//Finally, the <App> component returns a header containing 
//the text "GitHub User Data" and the user data (name, location, blog, and company) 
//rendered inside a <div> element.

return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
    </div>
);

// CALLING THE API
//To fetch data from the API, there are a fews ways we could to it.
    
// 1. Get Data Using Fetch API

        //Here is how to implement the getGitHubUserWithFetch() function. 
        //The code below uses async/await so that asynchronous code is readable 
        // and appears to be executing synchronously.

        //Though async functions always return a Promise, 
        //there is no need to return a value in this case since setUserData() 
        //is called with the resulting jsonData within the function itself.

        //Now comes the fetch() API, which takes as argument a URL, 
        //makes a network request to that URL, and returns a Promise that 
        //resolves to a response object.

        //The await keyword in front of the fetch() function pause the code 
        //until fetch() returns a fulfilled Promise, after which it returns 
        //the resolved value response.

        //The response is then parsed into a JSON using the json() method, 
        //which also returns a Promise that resolves to the JSON object jsonData. 
        //The use of await yet again pauses the code until the response is parsed to JSON. 
        //Then setUserData() is called with the resulting JSON object jsonData. 
        //It updates the state of the <App> component with GitHub user data.

const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
};
        
//2. Get Data Using Axios
        
        //The second approach to fetch the data from the GitHub API is by using the Axios library. 
        //You already installed the dependency in your project. 
        //All you need now is to import it inside src/App.js. 
        //So go ahead and add this import.
        
import axios from "axios";
        
        //Add another function, getGiHubUserWithAxios(), in your <App> component, which use Axios. 
        //Since it is a Promise-based library, you can seamlessly replace Promise.then() with async/await.
        
        //the get() method of the library takes as argument a URL and makes an http request to that URL. 
        //It then automatically transforms the response to JSON, which you can get from its data property. 
        //Once the data is received, the state of the component is updated via the setUserData() function.
        
const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
    };
        
          // Inside your <App> component, make sure you call getGiHubUserWithAxios() 
          //instead of getGitHubUserWithFetch() inside useEffect().
        
useEffect(() => {
getGiHubUserWithAxios();
}, []);
        
        
        
//Final Codes
        
import React, { useState, useEffect } from "react";
import "./App.css";

const gitHubUrl = "https://api.github.com/users/deekshasharma";

function App() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    const getGitHubUserWithFetch = async () => {};

return (
    <div className="App">
        <header className="App-header">
            <h2>GitHub User Data</h2>
        </header>
        <div className="user-container">
            <h5 className="info-item">{userData.name}</h5>
            <h5 className="info-item">{userData.location}</h5>
            <h5 className="info-item">{userData.blog}</h5>
            <h5 className="info-item">{userData.company}</h5>
        </div>
    </div>
);
}

export default App;
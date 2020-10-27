import React, {Component} from 'react';

// CREATING A STATE.
//A state is simply an object that holds data pending to be rendered. 
//This is where we will store the output from the API call.

class App extends Component {

    state = {
      contacts: []
    }
    ...
  }


// CALLING THE API
//To fetch data from the API, there are a fews ways we could to it.

class App extends Component {
    ...
    componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
    }
    ...
  }

// fetch('http://jsonplaceholder.typicode.com/users') 
//will make a GET request to the endpoint 
//.then(res => res.json()) parses the output to JSON, 
//.then((data) => {this.setState({ contacts: data })}) 
//sets the value of our state to the output from the API call 
//and finally .catch(console.log) logs any error we get to the console.
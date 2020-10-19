import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Nested Components, React tools

//PRACTICE 1
// Initial Component Setup [A function component]

function Greeting() {
    return (
        <div>
            <h2>Caleb Duff</h2>
            <p>This is my baby step</p>
        </div>
    );
}

ReactDom.render(<Greeting />, document.getElementById('root'));  

// Created another Component [An ES6 arrow function component] (Person) and nested it inside the (Greetings Component)

function Greeting() {
    return (
        <div>
            <Person />
            <p>This is my baby step</p>
        </div>
    );
}

const Person =() => <h2>Caleb Duff</h2>; 

ReactDom.render(<Greeting />, document.getElementById('root')); 


// Created another Component [An ES6 arrow function component] (Message) and nested it also inside the (Greetings Component) 
// Just like the (Person) component.

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
            
        </div>
    );
}

const Person =() => <h2>Caleb Duff</h2>; 
const Message =() => {
    return <p>This is my baby step</p>; 
};

ReactDom.render(<Greeting />, document.getElementById('root')); 





function Greeting() {
    return (
        <div>
            <Person />
            <Message />
            <Signature />
            
        </div>
    );
}

const Person =() => <h2>Caleb Duff</h2>; 
const Message =() => {
    return <p>This is my baby step</p>; 
};
const Signature = () => {
    return <p>Signed TLGM &copy 2020</p>;
};

ReactDom.render(<Greeting />, document.getElementById('root'));


// PRACTICE 2
// Here the Image, Title and Author Components are nested inside the Book Component.
// Also, the Book Component is nested into the BookList Component.

function Booklist() {
    return (
        <section>
            <Book />
        </section>
    );
}

const Book = () =< {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => {
    <img src='' alt="" />
};

const Title = () => <h1>Animal Farm</h1>;
const Author = () => <h4>George Orwell</h4>;

ReactDom.render(<Booklist />, document.getElementById('root'));


// PRACTICE 3 
// Here the Car Component is nested inside the Garage Component.

class Car extends React.Component {
    render() {
        return <h3>I am a Mercedes</h3>;
    };
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who parks in my garage?</h1>
                <Car />                
            </div>  
        );
    }
}

ReactDom.render(<Garage />, document.getElementById('root'));




// PRACTICE 4 
// Here the Avatar Component is nested inside the UserInfo Component, which is likewise nested inside the Commnet Component.

function Avatar {
    return (
        <img src='' alt='' />
    );
}

function UserInfo {
    return (
        <div className='UserInfo'>
            <Avatar />
            <div className='UserInfo-name'>

            </div>
        </div>
    );
}


function Comment {
    return (
        <div className='Comment'>
            <UserInfo />
            <div className='Comment-text'></div>
            <div className='Comment-date'></div>
        </div>
    );
}

ReactDom.render(<Comment />, document.getElementById('root'));
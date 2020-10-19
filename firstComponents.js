// Function Component

// Props input is an explicit one, it is similar to the list of attributes an HTML element can have.   
const MyComponent = (props) => {
    return (
        <domElementOrComponent ... />
    );
}



// Class Component are a bit more powerful

// State input is an internal one, it is really the more interesting because of how REACT uses it to auto-reflect changes in the browser.
class MyComponent extends React.Component {
    render () {
        return (
            <domElementOrComponent ... />
        ); 
    }
}


// Important difference between these two inputs:
// - With any Component, the state object can be Changed, while the props objects represent fixed values.
// - Props are immutable, components can only change their internal state not their properties.

// Creating a Class Component
// When creating a React Component, the component's name must start with an uppercase letter
// The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
// The component also requires a render() method, this method returns HTML

// Creating a Class component called Chair

class Chair extends React.Component {
    render() {
        return <h2>Hi!, I have a Chair</h2>
    }
}

// Now your React application has a component called Chair, which returns a <h2> Element.
// To use this component in your application, use similar syntax as normal HTML: <Chair />
ReactDOM.render(<Chair />, document.getElementById('root'));



// Creating a Function Component
// A Function component also returns HTML,

function Chair() {
    return <h2>Hi!, I have a Chair </h2>
}

// Display the Chair component in the 'root' element:
ReactDOM.render(<Chair />, document.getElementById('root'));


// Could have well written the above function component using arrow function ES6 standard
const Chair = () => {
    return <h2>Hi!, I have a Chair</h2>
}
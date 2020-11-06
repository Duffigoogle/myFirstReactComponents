// useContext (Upmostly)

//What is React Context?
      // Imagine for a moment that you have a React app with a single parent component that 
      // contains many levels of child components inside of it.

      // Now, imagine passing data from the uppermost component all 
      // the way down to the last child component.

// In React data is passed top-down from one component to another through props.

// You’d have to pass that data through each and every component, through their props, 
// until you reach the last child component.

      // That’s painstaking, tiresome, and prone to errors. 👎

// This is where Context comes to the rescue. 👏

// The React Context API allows you to easily access data at 
// different levels of the component tree, without having to pass data down through props.


// How Does the useContext Hook Work?

      // The useContext Hook provides all the same functionality 
      // you’d expect from the Context API, 
      // just packaged up into a simple to use Hook that you can use inside functional components.

// Let’s compare the difference between using Context inside of a Class component 
// to using it inside of a functional component with the useContext Hook.

// The example below shows Context being used in a Class component:
import AppContext from './appContext.js';

class Example extends React.Component {
  static context = AppContext;
  render() {
    let value = this.context;
    ...
  }
}

// And below is the same Context object inside of a functional component, 
// using the new useContext Hook:

import AppContext from './appContext.js';

const Example = () => {
  const context = useContext(AppContext);
  return (
    ...
  );
}

// A Context provides both a consumer and a provider. 
// When using the useContext Hook in React, 
// you have to remember to pass in the whole context object, 
// not just the consumer or provider.

// You create a Context object in React by using React.CreateContext, 
// and then passing in an initial value, like so:

const AppContext = React.createContext({ foo: 'bar' });

// This AppContext object is what should be passed 
// as an argument into the useContext Hook. Like this:

const context = useContext(AppContext);



// useContext (REACTJS DOCUMENTATION)

const value = useContext(MyContext);

// Accepts a context object (the value returned from React.createContext) 
// and returns the current context value for that context. 
// The current context value is determined by the value prop of the nearest <MyContext.Provider> 
// above the calling component in the tree.

//When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a 
// rerender with the latest context value passed to that MyContext provider. Even if an ancestor 
// uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component 
// itself using useContext.

// Don’t forget that the argument to useContext must be the context object itself:

    // Correct: useContext(MyContext)
    // Incorrect: useContext(MyContext.Consumer)
    // Incorrect: useContext(MyContext.Provider)

//    A component calling useContext will always re-render when the context value changes. 
//  If re-rendering the component is expensive, you can optimize it by using memoization.
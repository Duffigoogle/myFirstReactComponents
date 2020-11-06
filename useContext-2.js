// Example Context

// Let’s take a look at how to access context with the useContext Hook. 
// First, a simple store for our example:

const colors = {
    blue: "#03619c",
    yellow: "#8c8f03",
    red: "#9c0312"
  };
  
  export const ColorContext = React.createContext(colors.blue);


// Provide Context

    // Then, we can provide our context to whatever branch needs it. 
    // In this instance, we create colors for the entire app, 
    // so we will wrap it in our App:

import { ColorContext } from "./ColorContext";

function App() {
  return (
    <ColorContext.Provider value={colors}>
      <Home />
    </ColorContext.Provider>
  );
}

    // This provides the context to the rest of the component 
    // (represented by the Home component). No matter how far a 
    // component is away from the Home component, 
    // as long as it is somewhere in the component tree, 
    // it will receive the ColorContext. 
    // There are various ways of consuming our context in any 
    // component wrapped with our provider.


// Consume Context

    // We can use <Consumer> which is available in both class-based 
    // and functional components. 
    // It would look something like this to use in your JSX:

return (
    <ColorContext.Consumer>
      {colors => <div style={colors.blue}>...</div>}
    </ColorContext.Consumer>
  );


    // Yet, consuming our context this way is only available in the return 
    // block so can’t be accessed outside of your JSX code. Of course, 
    // there are workarounds, but it isn’t going to be the most ideal.

    // You can give your component a context type: MyComponent.contextType = ColorContext; 
    // then, you can access the context in your component: let context = this.context; 
    // and that allows you to access your context outside of the JSX. Or instead, 
    // you could put in static contextType = ColorContext;. 
    // This works pretty good for class-based components, 
    // since it simplifies how to bring your context into your component. 
    // But, it will not work in a functional component.


// Enter useContext

    // useContext is the same as static contextType = ColorContext, 
    // except that it’s for a functional component. 
    // At the top of your component, you can use it like this:

import React, { useContext } from "react";

const MyComponent = () => {
  const colors = useContext(ColorContext);

  return <div style={{ backgroundColor: colors.blue }}>...</div>;
};

    // Now your component is simple, easy to read, and easy to test. 
    // useContext is as simple as that. 
    // Make sure here that you aren’t passing ColorContext.Consumer to useContext, 
    // we want the entire context here, not the provider or consumer. 
    // Also, instead of wrapping your JSX in a Consumer, 
    // you no longer need to in order to access your context. 
    // useContext will do that for you.
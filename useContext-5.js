// What is useContext Hook?

// Create Store

// First step is to import the useContext hook.

import React, { useContext } from "react";

// I am going to save the state in const blogInfo 
// as shown below. This is the simple store for 
// our example which holds the data.

const blogInfo = {
    React: {
      post: "Learn useContext Hooks",
      author: "Adhithi Ravichandran"
    },
    GraphQL: {
      post: "Learn GraphQL Mutations",
      author: "Adhithi Ravichandran"
    }
  };

  // This data is our store, and you can create 
  // as many stores as you would like for chunks 
  // of data within your application.


  // Create Context

  // Now we can create context by passing in the blogInfo

  const blogInfoContext = React.createContext(blogInfo);

  // We have now created the blogInfoContext and the next 
  // step would be to provide this context, 
  // so that the components can use it without 
  // having to receive props.



  // Provide Context to Components

  // Depending on what components may need the context, 
  // we can provide the context to components 
  // by using the Context.Provider. 
  // React does not care where in the component tree, 
  // the component exist. The idea is that, 
  // any component within the tree can get the context. 
  // In our example, I have created a parent component, 
  // and wrapped the Provider with the context value, 
  // for two other child components, BlogDetailComponent 
  // and MyOtherBlogInfoComponent.

  function ParentComponent() {
    return (
      <blogInfoContext.Provider value={blogInfo}>
        <h2>Use Context Example Component</h2>
        <BlogDetailComponent />
        <MyOtherBlogInfoComponent />
      </blogInfoContext.Provider>
    );
  }

// In our example, I have created a parent component, 
// and wrapped the Provider with the context value, 
// for two other child components, BlogDetailComponent 
// and MyOtherBlogInfoComponent.


// Enter useContext Hook
// Up until the previous step, we didn’t use the hook. 
// Once the context is provided to the components, 
// we can use the hook within our functional component. 
// The syntax for useContext is as follows:

const value = useContext(MyContext);

// If you have previously used the React context, 
// without hooks, you maybe familiar with Consumer. 
// The useContext(MyContext), is similar to <MyContext.Consumer> 
// in class components.

// Never use useContext(MyContext.Provider) or useContext(MyContext.Consumer). 
// The useContext hook only takes the context object itself as a parameter.


// Component 1

// Here we are going to use the hook useContext within our functional component. 
// In our first component, I am using the blogInfoContext to display 
// information related to React blog post.

function BlogDetailComponent() {
    const blogDetails = useContext(blogInfoContext);
  
    return (
      <div>
        <h3>React Blog Details</h3>
        <p>Topic: {blogDetails.React.post}</p>
        <p>Author: {blogDetails.React.author}</p>
      </div>
    );
  }


// Note: The component that uses useContext will always re-render 
// when the context value given to it changes. 
// This means, we don’t need to do anything additional 
// to keep track of the state change, 
// as long as the context is available within the component.

// Component 2

// In our second component, I am using the blogInfoContext to 
// display information related to GraphQL blog post.

function MyOtherBlogInfoComponent() 
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h3>GraphQL Blog Details</h3>
      <p>Topic: {blogDetails.GraphQL.post}</p>
      <p>Author: {blogDetails.GraphQL.author}</p>
    </div>
  );
}

// Putting it all together

import React from "react";
import ContextComponent from "./ComponentUseContext";
import ReducerComponent from "./ComponentUseReducer.js";

const renderReducerHook = () => {
  console.log("Reducer hook pressed");
  return <ReducerComponent />;
};

const renderContextHook = () => {
  console.log("Context hook pressed");
  return <ContextComponent />;
};

const App = () => {
  return (
    <div className="box">
      {renderReducerHook()}
      {renderContextHook()}
    </div>
  );
};

export default App;


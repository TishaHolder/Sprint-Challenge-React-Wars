# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library built in JavaScript by the team at Facebook to build out or render components or user interfaces. React JS solves the problem of managing website data without bogging down the actual DOM or web browser. It is very scalable because everything that we build is a component that we can use to build our applications.

1. What does it mean to think in react?

To think in react is the thought process or steps that react forces you to implement while you build react based applications. The steps include: breaking the user interface into a component hierarchy, building a static version in react, identifying the states that your app need, identifying which components own the states, and supporting inverse data flow.

1. Describe state.

State is an object that allows each component to dynamically change output/data in response to certain events. 

1. Describe props.

A component uses props to pass data held in state from the parent component to the child component. This is similar to function parameters. Props are read only and should not be modified inside the child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is a concept that refers to a change in a component’s return value after being passed the same state and/or props. The effect hook (useEffect()) with a dependency array as the second argument is used to sync efforts in a React component to state or prop changes. The effect will only fire when the dependency in the array changes.
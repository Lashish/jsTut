import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// this is what we create a simple function to render as a component
// function MyApp() {
//   return <h1>hello this is my function component!</h1>
// }
// just a bit try to understand what is happening here
// const reactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit",
// };

// just a try based on error what I got from code above but not success
// const ReactElement = [
//   ['type', "a"],
//   ['props', [
//     ['href', "http://google.com"],
//     ['target', "_blank"],
//   ]],
//   ['children', "Click me to visit"],
// ];
// another try to render custom 
// const reactAnotherElement = (
//   <>
//     <a href="http://google.com" target='_blank'>Click me to visit google page!</a>
//     <h1>hello world</h1>
//   </>
// )

// // using react.create 
// const reactnewElement = React.createElement('a', { href: 'http://google.com', target: '_blank' }, 'click me to visit')



ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

)

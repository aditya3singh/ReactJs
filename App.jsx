import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../../my-react-app/src/Header';
import Footer from '../../my-react-app/src/Footer';
import Food from '../../my-react-app/src/Food';
import PropTypesJust from './PropTypesJust';
import List from './List';
import Buttons from './Buttons';
import MyComponents from './MyComponents';
import Counter from './Counter';
import Activity from './Activity'
import Counter from './Counter';
import Forms from './Forms';
import LikesButton from './LikesButton';
import Ludo from './Ludo';
import TodoList from './TodoList';

function App() {
  return(
    <>
    <Header />
    <Food />
    <Footer />
    <PropTypesJust name="Aditya" age={21}  />
    <List />
    <Buttons />
      <MyComponents />
          <Counter />
      <Activity />
          <Counter />
    <Forms />
    <LikesButton />
      <Ludo />
      <TodoList />


    </>
  );
}

/*

This is for features or something...



export default Features;   

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Features from './Features';


function App() {
  const option1 = [<li>"hi"</li>,<li> "everhyone" </li>,<li>"how"</li>];
  const option2 = {a:"hi", b:"everhyone", c:"how", d:"are", e:"you"};
  return (
    <>
      <Features title colors= {"red"} times={"12"} days={"wednesday"} feature = {option1}/>
    </>
  );
}

export default App
*/


// function App() {
//   let [counter, setCounter] = useState(15);
//   const addValues = () => {
//     console.log("cliced", counter);
//     counter += 1;
//     setCounter(counter);
//   }
    
//   return (
//     <>
//       {/* <h1>Hello Vite ke sath React!</h1>

//       <h1>Counter value: {counter}</h1>
//         <button onClick = {addValues}>Add values{counter}</button>
//         <br />
//         <button>remove values</button> */}

//     </>
//   )
// }


export default App

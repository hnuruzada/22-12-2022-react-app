
import './App.css';
import { Home } from './pages/Home';
import {Routes,Route,Link} from "react-router-dom"

import { Todo } from './todo';
import { About } from './pages/About';
import { useEffect, useState } from 'react';

function App() {
  const [userName,setUserName]=useState("")

  useEffect(()=>{
    const uName=prompt("Write your username")

    setUserName(uName)
  },[])
  return (
    <div>

      <nav>
        <Link to="/">Home</Link> {""}|
        <Link to="/todo">To do</Link>{""}|
        <Link to="/about">About</Link>

      </nav>

      <Routes>

        <Route path="/" element={<Home userName={userName}/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/about" element={<About userName={userName}/>}/>
       
      </Routes>

    <footer>Wlcome to Footer</footer>

    </div>
  );
}

export default App;

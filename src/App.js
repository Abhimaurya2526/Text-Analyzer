import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Editor from './Components/Editor';
import "./App.css";
import Home from './Components/Home';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggle = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark';
      console.log('Toggling to:', newMode);
      document.body.style.backgroundColor = newMode === 'dark' ? 'black' : 'white';
      return newMode;
    });
  };
  
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Header mode={mode} toggle={toggle} />
        <Routes>
          <Route element={<Editor mode={mode}/>} path="/" />
          <Route element={<Home mode={mode}/>} path="editor" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

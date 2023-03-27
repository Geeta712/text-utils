//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// This is a React Router v6 app
 import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color,setColor] = useState('light');

  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
       setTimeout(() =>{
        setAlert(null);
       }, 1500);
    }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(4 34 64)';
      showAlert("Dark mode has been enabled","success");

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  //for colorpanel
  const toggleColor = (value) =>{
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
  }
  return (
    <>
     <BrowserRouter> 
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} color={setColor}/>
      <Alert alert={alert}/> 
      <div className="container my-3">
         <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter, Remove Extra Spaces" mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

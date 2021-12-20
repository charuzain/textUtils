import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =(type , message)=>{
    setAlert({
      type : type,
      message :message
    })
    setTimeout(() => { setAlert("") }, 1000)

  }

  const handleToggle = function(){
    if(mode === 'dark'){
    setMode('light')
    document.body.style.backgroundColor ="white"
      showAlert("success" , "Light mode has been enabled")
  }
    else{
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert("success", "Dark mode has been enabled")
    }

    }


  return (
    <>
    <Navbar title = "TextUtil" mode={mode} handleToggle={handleToggle}/>
      <Alert alert={alert}/>
    <div className="container my-3">
     <Form heading="Enter the text" showAlert={showAlert}/>
   </div>
    </>
  );
}

export default App;
//

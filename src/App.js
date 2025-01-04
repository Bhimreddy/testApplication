import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light")
  const[alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  } 
const removeBackground = () => {
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
}

  const toggleMode = (cls) => {
    removeBackground()
    document.body.classList.add('bg-'+cls)
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Darkmode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Lightmode has been enabled', 'success')
    }
  }
  return (
    <>
    <Router>
     <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
     <div className='container my-3'>
     <Routes>
         <Route exact path="/about" element={<About/>} />
         <Route exact path="/" element={<TextForm heading ="Enter the text to analyze" alert={alert} mode={mode}/>} />
      </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;

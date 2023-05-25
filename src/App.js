import { useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode ]=useState('light');
  const toggleMode = () => {
    const body = document.querySelector("body");
  
    if (mode === "light") {
      setMode("dark");
      body.style.backgroundColor = "#212529";
      body.style.color = "#fff";
  
    } else {
      setMode("light");
      body.style.backgroundColor = "#fff";
      body.style.color = "#212529";
    }
  };
  
  return (
    <>
        {/* <TextForm heading ="Enter Text to Analyse:" mode={mode}/>
         */}

        <Router>
        <Navbar title="Vimify" mode={mode} toggleMode={toggleMode}/>

          <Routes>

              <Route exact path="/" element={<TextForm heading ="Enter Text to Analyse:" mode={mode}/>} />
              <Route exact path="/about" element={<AboutUs mode={mode}/>} />
          </Routes>
        </Router>

    </>
  );
}

export default App;

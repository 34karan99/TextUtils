
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [alert, setAleart] = useState(null);
  const showAleart = (message, type)=>{
    setAleart({
      msg : message,
      type : type
    })
    setTimeout( ()=>{
      setAleart(null);
    }, 1500);
  }
  

  const toggleMode = () =>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = '#100133';
      showAleart("Dark Mode Enabled", "success");
      setMyStyle({
        color: "white",
        backgroundColor: "#0a0021",
      });
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAleart("Light Mode Enabled", "success");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    }

  }

  return (
    <>
      <Navbar Title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 px-3 main" >
        <TextForm heading="Enter the text to analyze" myStyle={myStyle}/>
      </div>
    </>
  );
}

export default App;


import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
// const [greenMode, setGreenMode] = useState('light');
const [mode, setMode] = useState('light');
const [alert, setAlert]=useState(null);
const showAlert=(message, type)=>{
        setAlert({msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null)
        },1500)
}
// const toggleGreenMode=()=>{
//   if(greenMode==='lightg'){
//     setGreenMode('dark')
//     document.body.style.backgroundColor='#2a6e20'
//     showAlert("Green Dark mode enabled", 'success')
//   }
//   else{
//     setGreenMode('green')
//     document.body.style.backgroundColor='white'
//     showAlert("Light mode enabled", 'success')
//   }
// }
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#0a2748'
    showAlert("Dark mode enabled", 'success')
    document.title="TextUtil Dark mode"
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode enabled", 'success')
  }
}
return (
<>
<Router basename={process.env.PUBLIC_URL}>
<div className="container" my-3="true"> 
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <TextForm heading="TextUtil- Word Counter, Character Counter, Case Manipulation" mode={mode} showAlert={showAlert} /> 
          </Route>
        </Switch>
        
        </div>
</Router>

</>


  );
  }
export default App;

// btnText={mode==='light'?btnText:setbtnText("Enable light mode")
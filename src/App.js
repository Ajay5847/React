import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js/Navbar';
import Alert from './Exercises/TextUils/Alert';
import TextUtils from './Exercises/TextUils/TextUtils';

function App() {
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <div>
      <Navbar heading="TextUtils" />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextUtils showAlert={showAlert} />
      </div>
    </div>
  );
}

export default App;

Navbar.defaultProps = {
  heading : "SetTitle"
}

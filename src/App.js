import './App.css';
import Navbar from './components/Navbar.js/Navbar';
import TextUtils from './Exercises/TextUils/TextUtils';

function App() {
  return (
    <div>
      <Navbar heading="TextUtils" />
      <div className="container my-3">
      <TextUtils />
      </div>
    </div>
  );
}

export default App;

Navbar.defaultProps = {
  heading : "SetTitle"
}

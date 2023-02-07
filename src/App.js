import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

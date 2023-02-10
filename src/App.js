import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HeroPage from './Components/HeroPage/HeroPage';
import Steps from './Components/Steps/Steps';
import Solution from './Components/Solution/Solution';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
           <Route exact path="/" element={<div>
            <HeroPage/>
            <Steps/>
            <Solution/>
            <Footer/>
           </div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

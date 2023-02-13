import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HeroPage from './Components/HeroPage/HeroPage';
import Steps from './Components/Steps/Steps';
import Solution from './Components/Solution/Solution';
import Footer from './Components/Footer/Footer';
import Faqs from './Components/Faqs/Faqs';

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
           </div>}/>
           <Route exact path='/contactus' element={
            <div>
              <Faqs/>
            </div>
           }>

           </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

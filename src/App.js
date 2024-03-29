import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HeroPage from "./Components/HeroPage/HeroPage";
import Steps from "./Components/Steps/Steps";
import Solution from "./Components/Solution/Solution";
import Footer from "./Components/Footer/Footer";
import Faqs from "./Components/Faqs/Faqs";
import Tracking from "./Components/Tracking/Tracking";
import TrackingWaiting from "./Components/TrackingWaiting/TrackingWaiting";
import MoreDetails from "./Components/MoreDetails/MoreDetails";
import TrackingTransit from "./Components/TrackingTransit/TrackingTransit";
import TrackingDelivered from "./Components/TrackingDelivered/TrackingDelivered";
import AboutUs from "./Components/AboutUs/AboutUs";
import loaderImage from "./Assets/images/preloader.png"
import ScrollToTop from "./Components/ScrollToTop";
import pickboxLogo from "./Assets/images/pickbox logo transparent.png"
import TrackingError from "./Components/TrackingError/TrackingError";
import { searchContext } from "./Context/searchContext";

function App() {
  const [loading, setLoading] = useState(false)
  const [trackingCode, setTrackingCode] = useState(null)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div>
      <Router>
      <ScrollToTop/>
      <searchContext.Provider value={[trackingCode, setTrackingCode]}>
        <div>
          {loading? <div className="preloader">
                    <img src={loaderImage} alt="loader" className="loader"/>
                </div> :  <div><NavBar /></div>}
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                {loading ? <div className="preloader">
                    <img src={loaderImage} alt="loader" className="loader"/>
                </div> : <div>
                <HeroPage />
                <Steps />
                <Solution />
                  </div>}
              </div>
            }
          />
          <Route exact path="/contactus" element={loading ? <div className="preloader">
                    <img src={loaderImage} alt="loader" className="loader"/>
                </div> : <Faqs/>}></Route>
                
          <Route exact path="/tracking" element={loading? <div className="preloader">
            <img src={loaderImage} alt="loader" className="loader"/>
          </div> : <Tracking />}></Route>
          <Route exact path="/aboutus" element={loading ? <div className="preloader">
                    <img src={loaderImage} alt="loader" className="loader"/>
                </div> : <AboutUs/>}></Route>
          <Route
            exact
            path="/tracking-waiting"
            element={<TrackingWaiting />}
          ></Route>
          <Route
            exact
            path="/tracking-in-transit"
            element={<TrackingTransit />}
          ></Route>
          <Route
            exact
            path="/tracking-delivered"
            element={<TrackingDelivered />}
          ></Route>
          <Route exact path="/more-details" element={loading ? <div className="preloader">
                    <img src={loaderImage} alt="loader" className="loader"/>
                </div> : <MoreDetails/>}></Route>
          <Route exact path="/tracking-error" element={<TrackingError/>}></Route>
        </Routes>
        <div>
          {loading? <div className="preloader">
                    <img src={loaderImage} alt="loader" className="loader"/>
                </div> :  <div><Footer/></div>}
        </div>
        </searchContext.Provider>
      </Router>
      
    </div>
  );
}

export default App;

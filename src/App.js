import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <HeroPage />
                <Steps />
                <Solution />
              </div>
            }
          />
          <Route exact path="/contactus" element={<Faqs />}></Route>
          <Route exact path="/tracking" element={<Tracking />}></Route>
          <Route
            exact
            path="/tracking-waiting"
            element={<TrackingWaiting />}
          ></Route>
          <Route
            exact
            path="/tracking-in-transit"
            element={<TrackingTransit/>}
          ></Route>
          <Route
            exact
            path="/tracking-delivered"
            element={<TrackingDelivered/>}
          ></Route>
          <Route
            exact
            path="/more-details"
            element={<MoreDetails/>}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

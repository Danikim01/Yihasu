import "./App.css";
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Faq from "./Components/Faq";
import { AboutUs } from "./Components/AboutUs";
import ShakeIcon from "./Components/ShakeIcon";

function App() {
  return (
    <Router basename="/Yihasu/">
      <div className="App">
        <Navbar />
        {/* <a href="https://wa.me/1161350021" target="_blank" className="float">
          <WhatsApp id="fa-wpp" style={{fontSize:"70px"}}/>
        </a> */}
        <ShakeIcon/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
          <Route path="/preguntas" element={<Faq />}></Route>
          <Route path="/nosotros" element={<AboutUs />}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

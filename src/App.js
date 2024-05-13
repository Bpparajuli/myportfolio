import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Service from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Others from "./Pages/Others/Others";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </>
  );
};

export default App;

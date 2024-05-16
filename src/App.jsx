import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Resev from "./Components/Resev";
import Menu from "./Components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Resev />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="*" element={<Hero />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

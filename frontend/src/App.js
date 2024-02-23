import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import Navbar from "./component/Pages/Navbar";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import Contact from "./component/Pages/Contact";
import About from "./component/Pages/About";
import { NotFound } from "./component/Auth/NotFound";
import Footer from "./component/Pages/Footer";
// import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

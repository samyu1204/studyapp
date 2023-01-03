import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./Navbar";
import Finance from "./pages/Finance";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/blog" element = {<Blog />}/>
          <Route path="/finance" element = {<Finance />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

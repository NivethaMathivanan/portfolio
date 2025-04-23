// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Footer from "./Component/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./Component/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Blog />
        <About />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;

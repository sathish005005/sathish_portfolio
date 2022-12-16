import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

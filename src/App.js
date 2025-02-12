import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Pointer from "./components/Pointer";
//Styles
import "./App.scss";

function App() {

  return (
    <>
    <Pointer/>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Footer />
    </>
  );
}

export default App;
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Pointer from "./components/Pointer";
import { useLocation } from "react-router-dom";

//Styles
import "./App.scss";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <Pointer/>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default App;

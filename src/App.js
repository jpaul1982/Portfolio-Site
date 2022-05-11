import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

//Styles
import "./App.scss";

function App() {
  return (
    <>
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;

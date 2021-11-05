import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "../components/ProjekKami/Cards";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Testimoni_Cards from "../components/Testimoni/Testimoni_Cards"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Cards />
      <Testimoni_Cards />
    </Router>
  );
};

export default Home;

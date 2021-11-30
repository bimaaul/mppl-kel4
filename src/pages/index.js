import React, { useState } from "react";
import Cards from "../components/ProjekKami/Cards";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TestimoniCards from "../components/Testimoni/Testimoni_Cards";
import Anggota from "../components/Anggota";
import Hubungi from "../components/Hubungi";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { homeObjOne } from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...homeObjOne} />
      <Services />
      <Cards />
      <Anggota />
      <TestimoniCards />
      <Hubungi />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Instractor from "../Instractor/Instractor";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Instractor />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;

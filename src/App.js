import React from "react"
import Navbar from "./Navbar.js"
import HeroSection from "./HeroSection.js"
import Footer from "./Footer.js"
import AppSection from "./AppSection.js"
import CardSection from "./CardSection.js"

const App = () => {
  return(
    <div>
      
      <Navbar></Navbar>
      <HeroSection/>
      <CardSection/>
      <AppSection/>
      <Footer/>

    </div>
  );
};

export default App;
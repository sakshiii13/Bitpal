import React from "react";

import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import Distribution from "./Distribution"
import Grow from "./Grow"
import Roadmap from "./Roadmap"
import SliderSection from "./SliderSection"
import Team from "./Team";
import Advisors from "./Advisors";
import ICO from "./ICO";
import Token from "./Token";
import Partners from "./Partners";
import News from "./News";

const Home = () => {
  return (
    <>
    
      <HeroSection />
      <Services/>
      <About/>
      <Distribution/>
      <Grow/>
      <Roadmap/>
      <SliderSection/>
      <Team/>
      <Advisors/>
      <ICO/>
      <Token/>
      <Partners/>
      <News/>
      
    </>
  );
};

export default Home;

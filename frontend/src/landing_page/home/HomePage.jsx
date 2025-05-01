import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";
import Awards from "./Awards";

function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Education />
      <Pricing />
      <Awards />
    </div>
  );
}

export default HomePage;

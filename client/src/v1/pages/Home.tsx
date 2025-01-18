import { useState, useEffect } from 'react'
import HeroSection from "../components/sections/home/HeroSection";
import Features from "../components/sections/home/Features";
import CTA_reiteration from "../components/sections/home/CTA_reiteration";
import Loader from '../components/Loader'

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 7000)
  })
  return (
    <div>
      {
        loader ? (
          <Loader />
        ) : (
          <div>
            <HeroSection />
            <Features />
            <CTA_reiteration />
          </div>
        )
      }
    </div>
  );
};

export default Home;

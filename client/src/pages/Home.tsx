import Layout from "../components/layouts/Layout";

import HeroSection from "../components/sections/home/HeroSection";
import Features from "../components/sections/home/Features";
import CTA_reiteration from "../components/sections/home/CTA_reiteration";

const Home = () => {
  return (
    <Layout>
      <div>
        <HeroSection />
        <Features />
        <CTA_reiteration />
      </div>
    </Layout>
  );
};

export default Home;

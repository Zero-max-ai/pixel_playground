import Layout from "../components/layouts/Layout";

import IntroSection from "../components/sections/about/IntroSection";
import MissionSection from "../components/sections/about/MissionSection";
import TeamSection from "../components/sections/about/TeamSection";

const About = () => {
  return (
    <Layout>
      <div className="lg:px-20">
        <IntroSection />
        <MissionSection />
        <TeamSection />
      </div>
    </Layout>
  );
};

export default About;

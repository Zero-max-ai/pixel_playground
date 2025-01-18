import IntroSection from '../components/sections/about/IntroSection'
import MissionSection from '../components/sections/about/MissionSection'
import TeamSection from '../components/sections/about/TeamSection'

const About = () => {
  return (
    <div className="flex flex-col">
      <IntroSection />
      <MissionSection />
      <TeamSection />
    </div>
  )
}

export default About;

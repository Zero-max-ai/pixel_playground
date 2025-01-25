import HeroSection from '../components/sections/home/HeroSection'
import QuickAboutSection from '../components/sections/home/QuickAboutSection'
import FeatureSection from '../components/sections/home/FeatureSection'
import Testimonials from '../components/sections/home/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuickAboutSection />
      <FeatureSection />
      <Testimonials />
    </div>
  )
}

export default Home;

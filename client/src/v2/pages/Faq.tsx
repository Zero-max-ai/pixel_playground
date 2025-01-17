import FaqSection from '../components/sections/faq/FaqSection'
import FaqIntro from '../components/sections/faq/FaqIntro'

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FaqIntro />
      <FaqSection />
    </div>
  )
}

export default Faq;

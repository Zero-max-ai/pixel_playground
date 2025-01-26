import SectionLayout from '../../layout/SectionLayout'
import LinkButton from '../../LinkButton'

const HeroSection = () => {
  return (
    <SectionLayout>
      <div className="md:py-32 pt-2 pb-14 w-11/12 sm:w-7/12 mx-auto flex max-md:flex-col md:items-center justify-between gap-5">
        <div className="md:w-1/2 flex flex-col gap-2">
          <h1 className="bowlby-one text-2xl md:text-4xl">Unleash your Inner Artist, Pixel by Pixel.</h1>
          <span className="anonymous-pro-bold max-md:text-sm">Your playground for endless creativity- no skills required, just ideas.</span>
          <div className="flex gap-4">
            <LinkButton link={'/create'} title={'Start Creating'} />
            <LinkButton link={'/about'} custom={'secondary'} title={'Learn More'} />
          </div>
        </div>
        <img
          src="https://media.tenor.com/ccpKmf7plusAAAAi/anime-sad-wave.gif"
          alt="Welcome Gif"
          className="w-full md:max-w-sm w-4/12 border-8 border-indigo-300"
        />
      </div>
    </SectionLayout>
  )
}

export default HeroSection;

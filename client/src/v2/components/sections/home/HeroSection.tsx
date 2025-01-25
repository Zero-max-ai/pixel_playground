import SectionLayout from '../../layout/SectionLayout'
import LinkButton from '../../LinkButton'

const HeroSection = () => {
  return (
    <SectionLayout>
      <div className="py-32 w-11/12 sm:w-7/12 mx-auto flex items-center justify-between">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="bowlby-one text-4xl">Unleash your Inner Artist, Pixel by Pixel.</h1>
          <span className="anonymous-pro-bold">Your playground for endless creativity- no skills required, just ideas.</span>
          <div className="flex gap-4">
            <LinkButton link={'/create'} title={'Start Creating'} />
            <LinkButton link={'/about'} custom={'secondary'} title={'Learn More'} />
          </div>
        </div>
        <img
          src="https://media.tenor.com/ccpKmf7plusAAAAi/anime-sad-wave.gif"
          alt="Welcome Gif"
          className="w-full max-w-sm border-8 border-indigo-300"
        />
      </div>
    </SectionLayout>
  )
}

export default HeroSection;

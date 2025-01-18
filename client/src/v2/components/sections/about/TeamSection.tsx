import SectionLayout from '../../layout/SectionLayout'
import Me from "../../../../assets/me.jpg";

const TeamSection = () => {
  return (
    <SectionLayout>
      <div className="pb-20 w-11/12 sm:w-7/12 mx-auto flex max-sm:flex-col-reverse max-sm:gap-5 items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="bowlby-one text-3xl">Meet the creator</h1>
          <span className="anonymous-pro-regular text-sm">
            Hi, I'm Akshat Gangi, the one-man team behind Pixel Playground. As a passionate developer and designer, I've combined my love for retro art and innovative tools to create this platform.
          </span>
          <span className="anonymous-pro-regular text-sm">
            My mission? To make pixel art accessible, enjoyable and inspiring for everyone, from beginners to seasoned artists. Pixel Playground is not just a project; It's a reflection of my journey and creativity. I hope you love it as much as I loved builing it!
          </span>
        </div>
        <img src={Me} alt={'profile_pic'} className="sm:w-1/6 w-2/6 mx-auto border-8 border-indigo-300" />
      </div>
    </SectionLayout>
  )
}

export default TeamSection;

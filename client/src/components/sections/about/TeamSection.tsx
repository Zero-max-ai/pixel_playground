// import CTAButton from "../../CTAButton";
import RouteButton from "../../RouteButton";

const TeamSection = () => {
  return (
    <div className="py-20 flex items-center justify-between w-10/12 mx-auto">
      <div className="w-5/12 gap-5 flex flex-col">
        <h1 className="text-[40px] poppins-bold">Meet the creator</h1>
        <span className="">
          Hi, I’m Akshat Gangi, the one-man team behind Pixel Playground. As a
          passionate developer and designer, I’ve combined my love for retro art
          and innovative tools to create this platform.
        </span>
        <span>
          My mission? To make pixel art accessible, enjoyable, and inspiring for
          everyone, from beginners to seasoned artists. Pixel Playground is not
          just a project; it’s a reflection of my journey and creativity. I hope
          you love it as much as I loved building it!
        </span>
        <RouteButton
          title={"Connect with me"}
          loc={""}
          classname="bg-[#DBEAFE] hover:bg-[#C3DCFD]"
          target="_blank"
        />
        <RouteButton
          title={"Share Your Feedback"}
          loc={"/report"}
          classname="bg-buttonColor hover:bg-[#FBB90F]"
        />
      </div>
      <div className="shadow-xl">
        <img
          src={
            "https://digwallpapers.com/wallpapers/full/8/1/5/53217-1440x2560-studio-ghibli-wallpaper-photo-phone-hd.jpg"
          }
          alt={"Profile Pic"}
          className="h-[350px] border-4 border-white"
        />
      </div>
    </div>
  );
};

export default TeamSection;

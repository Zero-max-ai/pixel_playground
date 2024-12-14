import RouteButton from "../../RouteButton";

const HeroSection = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto lg:py-32 py-20 flex max-xl:flex-col items-center justify-between gap-10">
      <div className="w-full xl:w-5/12 flex flex-col gap-5">
        <h1 className="poppins-bold max-lg:text-3xl lg:text-[60px]">
          Unleash Your Creativity in Pixels
        </h1>
        <span>
          Create stunning pixel art for avatars, designs, and more—straight from
          your imagination to the grid.
        </span>
        <RouteButton
          title={"Start Creating Now"}
          loc={"/create"}
          classname={"bg-buttonColor hover:bg-[#FAB605]"}
        />
      </div>
      <div className="w-10/12 h-[300px] lg:w-[500px] lg:h-[500px] bg-white shadow-xl rounded-[39px]"></div>
    </div>
  );
};

export default HeroSection;

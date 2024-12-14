import RouteButton from "../../RouteButton";

const CTA_reiteration = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center gap-5 lg:gap-10">
      <h1 className="poppins-bold text-[20px] lg:text-[40px]">
        Ready to Create Your Masterpiece?
      </h1>
      <span className="max-lg:text-sm">
        Start creating stunning pixel art in few click. Easy, intutive, and fun!
      </span>
      <RouteButton
        title={"Start Now"}
        loc={"/create"}
        classname={"bg-buttonColor hover:bg-[#FAB605]"}
      />
    </div>
  );
};

export default CTA_reiteration;

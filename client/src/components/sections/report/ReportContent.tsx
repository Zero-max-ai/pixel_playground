import Bug from "../../../assets/Bug.svg";

const ReportContent = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <div className="flex max-lg:flex-col-reverse items-center justify-between gap-10">
        <h1 className="poppins-bold text-[40px] leading-tight">
          We Value Your Feedback
        </h1>
        <img src={Bug} alt={"bug.svg"} className="w-32 h-32 object-contain" />
      </div>
      <span>
        Your feedback helps us improve the platform and provide a better
        experience. Please let us know what we can do better!
      </span>
    </div>
  );
};

export default ReportContent;

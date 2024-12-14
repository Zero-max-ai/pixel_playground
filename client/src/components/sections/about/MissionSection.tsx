import { missionDetails, missionProps } from "../../../utils/index";

const MissionSection = () => {
  return (
    <div className="py-20 w-full flex flex-col items-center justify-center gap-10">
      <h1 className="poppins-bold text-[40px]">
        Our Mission at Pixel Playground
      </h1>
      <div className="w-full lg:w-10/12 mx-auto flex flex-wrap max-lg:flex-col items-center justify-between gap-10">
        {missionDetails.map(({ title, description }: missionProps) => {
          return (
            <MissionCard key={title} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export default MissionSection;

const MissionCard = ({ title, description }: missionProps) => {
  return (
    <div className="flex grow flex-col justify-center bg-white shadow rounded-[13px] p-4 min-w-[200px] xl:max-w-[300px] h-[300px]">
      <h1 className="font-bold poppins-bold text-xl">{title}</h1>
      <span>{description}</span>
    </div>
  );
};

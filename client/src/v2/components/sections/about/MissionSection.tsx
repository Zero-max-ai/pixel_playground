import { missionDetails } from "../../../../utils/";
import MissionCard from "./MissionCard";
import SectionLayout from "../../layout/SectionLayout";

const MissionSection = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-4 w-11/12 sm:w-7/12 mx-auto">
        {missionDetails.map((card, index) => (
          <MissionCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default MissionSection;

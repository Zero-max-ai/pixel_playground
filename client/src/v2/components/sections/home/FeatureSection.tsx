import { featureCards } from "../../../../utils/index";
import SectionLayout from "../../layout/SectionLayout";

const FeatureSection = () => {
  return (
    <SectionLayout>
      <div className="pb-14 w-11/12 sm:w-7/12 mx-auto flex flex-col gap-4">
        <h1 className="bowlby-one max-md:text-2xl text-3xl">Core Features</h1>
        <div className="flex max-sm:flex-col justify-between gap-5">
          {featureCards.map(({ title, description, iconPath, iconType }) => {
            return (
              <div key={iconType} className="border-8 border-indigo-300 flex flex-col items-center justify-center gap-2 px-5 py-1">
                <img src={iconPath} alt={iconPath} className="w-[30px]" />
                <h1 className="bowlby-one">{title}</h1>
                <span className="anonymous-pro-regular">{description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeatureSection;

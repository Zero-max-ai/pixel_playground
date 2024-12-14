import { featureCards, FeatureProps } from "../../../utils/index";

const Features = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto lg:py-32 py-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-[40px] poppins-bold">What Makes Us Special?</h1>
      <div className="flex flex-col gap-5 items-center justify-center">
        {featureCards.map(
          ({ title, description, iconType, iconPath }: FeatureProps) => {
            return (
              <div
                key={iconType}
                className="bg-white rounded-[13px] max-w-[500px] flex items-center justify-between gap-10 shadow-lg px-10 py-4 hover:scale-110"
              >
                <img src={iconPath} />
                <div className="flex flex-col gap-3">
                  <h1 className="poppins-bold text-lg">{title}</h1>
                  <span className="text-sm">{description}</span>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Features;

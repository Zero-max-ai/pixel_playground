import { AboutIntro } from "../../../../utils/";
import SectionLayout from "../../layout/SectionLayout";

const IntroSection = () => {
  return (
    <SectionLayout>
      <div className="w-11/12 sm:w-7/12 mx-auto">
        <h1 className="bowlby-one text-3xl">About Pixel Playground</h1>
        <div className="py-5 flex flex-col gap-3 text-lg anonymous-pro-regular text-sm">
          {AboutIntro.map((item, index) => (
            <div key={index}>{item.content}</div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default IntroSection;

import AccordionDropdown from "./AccordionDropdown";
import { faqDetails } from "../../../../utils/";

const FaqSection = () => {
  return (
    <div className="w-11/12 sm:w-7/12 mx-auto py-10 flex flex-col items-start justify-center gap-5">
      {faqDetails.map((items, index) => (
        <AccordionDropdown
          key={index}
          header={items.header}
          context={items.context}
        />
      ))}
    </div>
  );
};

export default FaqSection;

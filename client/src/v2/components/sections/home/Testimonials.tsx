import SectionLayout from "../../layout/SectionLayout";
import { testimonial } from "../../../../utils/index";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <SectionLayout background={"bg-indigo-100"}>
      <div className="py-10 w-11/12 sm:w-7/12 mx-auto">
        <h1 className="bowlby-one text-3xl">Testimonials</h1>
        {testimonial.map(({ image, title, link }) => {
          return (
            <div className="w-fit bg-indigo-300 px-1 py-4">
              <Link
                className="flex gap-3 items-center justify-center"
                to={link}
                key={title}
              >
                <img src={image} className="w-[50px] rounded-full" />{" "}
                <h1 className="anonymous-pro-bold">{title}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default Testimonials;

import { Link } from "react-router-dom";

const FaqIntro = () => {
  return (
    <div className="w-11/12 sm:w-7/12 mx-auto pt-20 flex flex-col items-start justify-center gap-1">
      <h1 className="bowlby-one text-2xl sm:text-4xl">
        Frequently asked questions
      </h1>
      <p className="anonymous-pro-regular max-sm:text-sm">
        There are the most commonly asked questions about PixelPlayground.
      </p>
      <p className="anonymous-pro-regular max-sm:text-sm">
        Can't find what you're looking for?{" "}
        <Link
          to={""}
          className="anonymous-pro-bold underline underline-offset-4 bg-indigo-200 hover:bg-indigo-100 py-2"
        >
          Mail US!
        </Link>
      </p>
    </div>
  );
};

export default FaqIntro;

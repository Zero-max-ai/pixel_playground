import BrokenWindow from "./BrokenWindow";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center">
      <h1 className="anonymous-pro-bold text-2xl sm:text-4xl">Pixel shreds everywhere!</h1>
      <BrokenWindow />
      <h2 className="bowlby-one text-2xl sm:text-4xl">Error [404]:</h2>
      <p className="anonymous-pro-regular text-sm">
        A pixel went rogue and broke the grid.
      </p>
      <Link
        to={"/"}
        className="py-3 anonymous-pro-regular text-sm bg-indigo-300 hover:bg-indigo-200 hover:underline underline-offset-4"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;

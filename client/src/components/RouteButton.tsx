import { Link } from "react-router-dom";

interface RouteButtonProps {
  title: string;
  loc: string;
  classname: string;
  target?: string;
}

const RouteButton: React.FC<RouteButtonProps> = ({
  title,
  loc,
  classname,
  target = "_self",
}) => {
  return (
    <Link
      to={loc}
      target={target}
      className={`py-1 px-4 w-fit text-sm poppins-bold rounded-md ${classname ? classname : ""}`}
    >
      {title}
    </Link>
  );
};

export default RouteButton;

import { Link } from "react-router-dom";

interface LinkButtonProps {
  title: string;
  link: string;
  custom?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, link, custom }) => {
  return (
    <Link
      className={`${custom ? "border-4 border-indigo-300 hover:border-indigo-100 text-indigo-500 shadow-[4px_4px_1px_#cbd5e1]" : "bg-indigo-200 focus:bg-indigo-300 shadow-[4px_4px_1px_#818cf8]"} anonymous-pro-regular px-1 py-2 w-fit hover:shadow-none transition-all duration-300 outline-none`}
      to={link}
    >
      {title}
    </Link>
  );
};

export default LinkButton;

interface CTAButtonProps {
  title: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1 px-4 w-fit text-sm poppins-bold bg-buttonColor hover:bg-[#FBB90F] rounded-md"
    >
      {title}
    </button>
  );
};

export default CTAButton;

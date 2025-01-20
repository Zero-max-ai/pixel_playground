interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: () => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-col items-start anonymous-pro-regular">
      <label>{label}</label>
      <textarea
        rows={7}
        placholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-indigo-200 px-2 py-1 transition-all duration-300 outline-none shadow-[4px_4px_1px_#818cf8] focus:shadow-none resize-none"
        />
  </div>
  );
};

export default TextAreaField;

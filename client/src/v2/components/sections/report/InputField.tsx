interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-col items-start anonymous-pro-regular">
      <label className="">{label}</label>
      <input
        type={type}
        placholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-indigo-200 px-2 py-1 transition-all duration-300 outline-none shadow-[4px_4px_1px_#818cf8] focus:shadow-none"
      />
    </div>
  );
};

export default InputField;

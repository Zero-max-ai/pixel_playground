interface OptionInputProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required: boolean;
}

const OptionInput: React.FC<OptionInputProps> = ({
  label,
  options,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center gap-2">
        <label>{label}</label>{" "}
        {required && <span className="text-red-500">*</span>}
      </div>
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="custom-input bg-white"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default OptionInput;

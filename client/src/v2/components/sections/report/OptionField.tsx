interface OptionFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionField: React.FC<OptionFieldProps> = ({label, options, value, onChange}) => {
  return (
    <div className="w-full flex flex-col items-start anonymous-pro-regular">
      <label>{label}</label>
      <select value={value} onChange={onChange} className="w-full bg-indigo-200 px-2 py-1 transition-all duration-300 outline-none shadow-[4px_4px_1px_#818cf8] focus:shadow-none outline-none">
        <option value="" disabled>Select an option</option>
        {
          options.map((option, index) => <option key={index} value={option}>{option}</option>)
        }
      </select>
    </div>
  )
}

export default OptionField;

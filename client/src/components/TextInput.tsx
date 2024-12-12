interface TextInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const TextInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  required = false,
}: TextInputProps) => {
  return (
    <div className="flex flex-col justify-center-center">
      <div className="flex items-center gap-2">
        <label>{label}</label>{" "}
        {required && <span className="text-red-500">*</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="custom-input"
      />
    </div>
  );
};

export default TextInput;

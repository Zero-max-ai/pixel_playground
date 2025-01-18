interface TextAreaInputProps {
  label: string;
  placeholder: string;
  row?: number;
  col?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
}

const TextAreaInput = ({
  label,
  placeholder,
  row,
  col,
  value,
  onChange,
  required = false,
}: TextAreaInputProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <label>{label}</label>
        {required && <span className="text-red-500">*</span>}
      </div>
      <textarea
        placeholder={placeholder}
        rows={row}
        cols={col}
        value={value}
        onChange={onChange}
        required={required}
        spellCheck={true}
        className="custom-input"
      />
    </div>
  );
};

export default TextAreaInput;

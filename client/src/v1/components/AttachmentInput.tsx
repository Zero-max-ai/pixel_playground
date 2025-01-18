import { useState } from "react";

interface AttachmentInputProps {
  label: string;
  onChange: (file: File | null) => void;
}

const AttachmentInput: React.FC<AttachmentInputProps> = ({
  label,
  onChange,
}) => {
  const [err, setError] = useState<string | null>(null);
  const acceptedFiles = ".png, .jpg, .jpeg";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // get the file we want

    if (file) {
      const validTypes = ["image/png", "image/jpg", "image/jpeg"];
      if (!validTypes.includes(file.type)) {
        setError("Invalid file type, Please upload a PNG, JPEG or JPG image.");
        onChange(null);
        return;
      }

      const maxSizeInBytes = 1024 * 1024 * 4; // 4mb in bytes
      if (file.size > maxSizeInBytes) {
        setError("File size exceeds 4MB. Please upload a smaller image.");
        onChange(null);
        return;
      }

      setError(null);
      onChange(file);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type={"file"}
        accept={acceptedFiles}
        onChange={handleFileChange}
        className="custom-input"
      />
      {err && <p className="text-xs text-red-500 mt-1">{err}</p>}
    </div>
  );
};

export default AttachmentInput;

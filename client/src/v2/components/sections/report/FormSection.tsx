import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from './TextAreaField'
import OptionField from './OptionField'

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 anonymous-pro-regular">
      <InputField
        label={"Name"}
        type={"text"}
        placeholder={"Akshat"}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <InputField
        label={"Email"}
        type={"email"}
        placeholder={"akshat@example.com"}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <OptionField
        label={"Type of Report"}
        options={["Feedback", "Suggestion" , "Issue", "Other"]}
        value={reportType}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setReportType(e.target.value)}
      />
      <TextAreaField
        label={"Description"}
        placeholder={"Describe your issue, feedback, or suggestion in detail..."}
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
      />
      <button className="bg-indigo-200 focus:bg-indigo-300 py-3 px-1 w-full shadow-[4px_4px_1px_#818cf8] hover:shadow-none transition-all duration-300 outline-none">Submit</button>
    </div>
  );
};

export default FormSection;

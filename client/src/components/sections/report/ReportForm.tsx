import { useState } from "react";
import { reportOptions } from "../../../utils/index";

import TextInput from "../../TextInput";
import OptionInput from "../../OptionInput";
import TextAreaInput from "../../TextAreaInput";
// import AttachmentInput from '../../AttachmentInput'
import CTAButton from '../../CTAButton'

const ReportForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [report, setReport] = useState("");
  const [details, setDetails] = useState("");
  // const [attachment, setAttachment] = useState(null);

  // const handleAttachmentChange = () => {};
  
  const handleSubmitEvent = () => {}

  return (
    <div className="flex flex-col gap-3 w-full xl:w-5/12 mx-auto bg-formBg shadow-md px-[46px] py-[26px] rounded-[13px]">
      <TextInput
        label={"Full Name"}
        type={"text"}
        placeholder={"john doe"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required={true}
      />
      <TextInput
        label={"Email"}
        type={"email"}
        placeholder={"johndoe@example.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <OptionInput
        label={"Select Report Type"}
        options={reportOptions}
        value={report}
        onChange={(e) => setReport(e.target.value)}
        required={true}
      />
      <TextAreaInput
        label={"Details"}
        placeholder={"Please explain the issue here."}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        required={true}
      />
      <CTAButton title={'Submit'} onClick={handleSubmitEvent} />
    </div>
  );
};

export default ReportForm;

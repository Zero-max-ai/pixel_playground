import Layout from "../components/layouts/Layout";

import ReportContent from "../components/sections/report/ReportContent";
import ReportForm from "../components/sections/report/ReportForm";

const Report = () => {
  return (
    <Layout>
      <div className="lg:px-20 lg:py-20 max-lg:pb-20">
        <ReportContent />
        <ReportForm />
      </div>
    </Layout>
  );
};

export default Report;

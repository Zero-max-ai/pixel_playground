import SectionLayout from '../../layout/SectionLayout'
import FormSection from './FormSection';

const ReportSection = () => {
  return (
    <SectionLayout>
      <div className="w-11/12 sm:w-7/12 mx-auto flex flex-col items-start justify-center gap-4">
        <h1 className="bowlby-one text-3xl">Help Us Improve Pixel Playground.</h1>
        <FormSection />
      </div>
    </SectionLayout>
  )
}

export default ReportSection;

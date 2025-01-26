import SectionLayout from "../../layout/SectionLayout";

const QuickAboutSection = () => {
  return (
    <SectionLayout background={'bg-indigo-100'}>
      <div className="pb-14 w-11/12 sm:w-7/12 mx-auto flex flex-col gap-3">
        <h2 className="bowlby-one max-md:text-2xl text-3xl">Why Pixel Playground?</h2>
        <span className="anonymous-pro-regular text-sm sm:text-md">
          Pixel Playground is a creative space designed for artists and
          designers to explore the world of pixel art. Whether you're just
          starting or you're a seasoned professional, our easy-to-use tools help
          bring your ideas to life, pixel by pixel. With features like real-time
          previews and a supportive community, we make it simple for anyone to
          create, share, and perfect their pixel art. Join us today and unlock
          your creative potential in the world of pixel creation!{" "}
        </span>
      </div>
    </SectionLayout>
  );
};

export default QuickAboutSection;

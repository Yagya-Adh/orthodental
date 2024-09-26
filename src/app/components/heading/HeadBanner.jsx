import logo from "../../../assets/iafgg.svg";

const HeadBanner = ({ headingsTitle, headingSlug }) => {
  return (
    <div className="p-3 py-3 h-[276px] mx-auto max-w-screen-2xl px-10">
      {/* className="p-3 py-1 h-[276px]" */}
      <h1 className="leading-2 font-semibold mt-6 text-5xl font-sans text-light-green20">
        {headingsTitle}
      </h1>
      <span className="text-sm">{headingSlug}</span>
      <img
        src={logo}
        alt="logo_"
        className=" w-[849px] h-[481.56px] absolute top-[-10.58px] left-[967px] opacity-45 z-0"
      />
    </div>
  );
};

export default HeadBanner;

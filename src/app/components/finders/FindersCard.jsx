import darkLogo from "../../../assets/innerCardlogo.svg";
import transparentLogo from "../../../assets/transparentLogo.svg";
import PillButton from "../button/PillButton";

const FindersCard = ({ background }) => {
  if (background == "#27606D") {
    return (
      <div
        className={`bg-light-blue30 max-w-screen-2xl px-10 mx-5 sm:mx-20 py-16 relative overflow-hidden mt-10 z-10 rounded-2xl flex flex-wrap text-center justify-center md:justify-evenly items-center bg-['${background}']`}
      >
        <h1 className="text-light-white10 font-sans text-center text-wrap  font-bold text-3xl sm:text-start w-2/3 my-2">
          Join the International Association of Facial Growth Guidance
        </h1>
        <div className="mt-3">
          <PillButton
            title={"Become a member"}
            backgroundColor={"bg-light-yellow20"}
          />
        </div>
        <img
          src={darkLogo}
          alt="logo_img"
          className="w-full absolute min-h-fit min-w-fit -z-10  opacity-45"
        />
      </div>
    );
  }

  if (background == "#E3E9ED") {
    return (
      <>
        <div
          className={`max-w-screen-2xl px-10 border mx-5 sm:mx-20 py-16 relative overflow-hidden mb-10 z-10 rounded-2xl flex flex-wrap justify-evenly items-center bg-['${background}`}
        >
          <h1 className="text-light-gray20 font-sans font-bold text-3xl text-center md:text-start w-2/3 my-2">
            Find an Orthotropics practitioner near you
          </h1>
          <PillButton
            title={"Find a practitioner"}
            backgroundColor={"bg-light-yellow20"}
          />
          <img
            src={transparentLogo}
            alt="logo_img"
            className="w-full  absolute min-h-fit min-w-fit  -z-10  opacity-85"
          />
        </div>
      </>
    );
  }
};

export default FindersCard;

import logo from "../../../assets/iafgg.svg";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import PillButton from "../../components/button/PillButton";

const Home = () => {
  const data = useSelector((state) => state.banner);

  return (
    <div className="relative flex-col items-center justify-start font-sans z-20 px-10 max-w-screen-2xl mx-auto mb-10">
      <h1 className="text-6xl my-20 font-extrabold  text-light-green20  tracking-wider sm:-tracking-normal ">
        The International <br /> Association of Facial Growth <br /> Guidence
        (Orthotropics<sup>&reg;</sup>)
      </h1>

      <img
        src={logo}
        className="bg-[#F0F3F5] opacity-10 min-h-svh min-w-fit absolute -top-80 sm:-top-44 sm:-right-72 -z-20 "
        alt="img_"
      />

      <div className="font-inter py-10">
        <p className=" mb-3 text-xl text-light-blue30 max-w-screen-sm leading-7">
          The IAFGG represents all those clinicians and technicians who believe
          that ideal development of the face and jaws is dependent on correct
          ‘oral posture’.
        </p>
        <PillButton
          title={"Find out more"}
          backgroundColor={"bg-light-green30"}
          textColor={"text-light-white10"}
        />
      </div>
    </div>
  );
};

export default Home;
/* 
 <img
        src={logo}
        className="bg-[#F0F3F5] opacity-10 h-[981.56px] w-[949px] md:absolute top-[-203.58px] left-[967px] -z-20 "
        alt="img_"
      />

*/

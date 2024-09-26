import NavBar from "./NavBar";
import NavBarTabs from "./NavBarTabs";
import logo from "../../assets/iafgg.svg";

const Header = () => {
  return (
    <>
      <div className="relative overflow-hidden"></div>
      <NavBar />
      <NavBarTabs />
      {/* <div className="w-[849px] h-[881.56px] absolute top-[-120.58px] left-[967px] opacity-25">
        <img src={logo} alt="" className=" w-3/4 -z-10" />
      </div> */}
    </>
  );
};

export default Header;

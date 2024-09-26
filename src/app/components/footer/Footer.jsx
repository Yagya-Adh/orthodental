import logo from "../../../assets/footerlogo.png";
import facebook from "../../../assets/facebook.svg";
import linkedin from "../../../assets/linkedin.svg";
import youtube from "../../../assets/youtube.svg";
import xtweeter from "../../../assets/xtweeter.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:gap-64 gap-32 bg-light-green40 text-light-white20 mx-auto p-3">
        <div className="flex-row justify-between">
          <div className="font-inter flex justify-between items-center flex-col md:flex-row">
            <NavLink to={"/"}>
              <div className="flex p-3 justify-center md:justify-between items-center flex-col md:flex-row">
                <img src={logo} className="h-10 " alt="footerlogo" />
                <p className="font-bold min-w-max  text-sm mx-3 tracking-wider">
                  The International Association of Facial <br /> Growth Guidance
                  (Orthotropics®)
                </p>
              </div>
            </NavLink>
            <nav>
              <ul className="p-2 font-semibold text-xl text-light-white20  flex justify-end lg:justify-between items-center flex-col md:flex-row ">
                <li className="m-2">
                  <NavLink to={"discover"}>Discover</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"education"}>Education</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"science"}>Science</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"about-us"}>About the IAFGG</NavLink>
                </li>
                <li className="m-2">
                  <NavLink to={"shop"}>Shop</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <nav className=" py-16 md:py-0 relative flex text-light-white20 md:justify-between justify-center items-center md:items-end flex-col md:flex-row">
          <ul className="flex justify-between items-center md:flex-row flex-col gap-2 text-xl ">
            <li className="m-2 ">
              <NavLink to={"discover"}>Contact us</NavLink>
            </li>
            <li className="m-2">
              <NavLink to={"discover"}>Privacy notice</NavLink>
            </li>
            <li className="m-2">
              <NavLink to={"discover"}>Cookies</NavLink>
            </li>
            <li className="m-2">
              <NavLink to={"discover"}>Disclaimer</NavLink>
            </li>
          </ul>
          <div className="flex flex-col  justify-center flex-wrap">
            <h1 className="me-10 order-2 tracking-wide font-inter">
              © Orthotropics 1999 – 2024
            </h1>
            <div className="order-1 absolute top-0 md:relative">
              <div className="flex flex-wrap justify-center items-center md:justify-start">
                <img className="m-1" src={facebook} alt="facebook_" />
                <img className="m-1" src={xtweeter} alt="xtweeter_" />
                <img className="m-1" src={youtube} alt="youtube_" />
                <img className="m-1" src={linkedin} alt="linkedin_" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footer;

import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import logoIAFGG from "../../../assets/iafgg.svg";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-6 max-w-screen-2xl mx-auto  items-center ">
        <div className="flex justify-between text-light-green20 items-center">
          <NavLink to={"/"}>
            <div className="flex items-center justify-center">
              <img src={logoIAFGG} className="w-10 mx-3" />
              <span className="text-3xl font-bold ">IAFGG</span>
            </div>
          </NavLink>
          <h1 className="text-sm font-semibold tracking-tight text-start hidden  md:block ms-10">
            The International Association of Facial Growth Guidence (
            Orthotropics<sup>&reg;</sup> )
          </h1>
        </div>
        <Search />
      </div>
    </>
  );
};

export default NavBar;

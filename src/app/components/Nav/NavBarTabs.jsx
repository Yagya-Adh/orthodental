import { NavLink } from "react-router-dom";
import logo from "../../../assets/iafgg.svg";

const navLink = [
  { id: 1, linkTitile: "Home", navPath: "/", slug: "" },
  {
    id: 2,
    linkTitile: "Discover",
    navPath: "discover",
    slug: "Practical guidance about Orthotropics.",
  },
  {
    id: 3,
    linkTitile: "Education",
    navPath: "education",
    slug: "Educational information about Orthotropics.",
  },
  {
    id: 4,
    linkTitile: "Science",
    navPath: "science",
    slug: "Following the data on Orthotropics.",
  },
  {
    id: 5,
    linkTitile: "About the IAFGG",
    navPath: "about-us",
    slug: "Practical guidance about Orthotropics.",
  },
  { id: 6, linkTitile: "Events", navPath: "events", slug: "" },
  { id: 7, linkTitile: "Shop", navPath: "shop", slug: "" },
];
const NavBarTabs = () => {
  return (
    <nav>
      <ul className="flex font-inter max-w-screen-2xl mx-auto px-10">
        {navLink?.map((linksName) => (
          <div className="flex flex-col" key={linksName.id}>
            <NavLink to={linksName.navPath}>
              <li
                className={`text-light-green20  mx-1 border-t-4 border-transparent hover:border-[#2E9BB2] p-2 transition-all`}
                key={linksName.id}
              >
                {linksName.linkTitile}
              </li>
            </NavLink>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarTabs;

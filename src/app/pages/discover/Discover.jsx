import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import FindersCard from "../../components/finders/FindersCard";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector, useDispatch } from "react-redux";
import BodyCard from "../../components/body/BodyCard";

const Discover = () => {
  const data = useSelector((state) => state.discover);

  return (
    <>
      <HeadBanner
        headingsTitle={"Discover"}
        headingSlug={"Practical guidance about Orthotropics."}
      />
      <BodyCard data={data} />
      <FindersCard background={"#1F323D"} />
    </>
  );
};

export default Discover;

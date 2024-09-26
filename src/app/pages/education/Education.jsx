import { ArrowRightIcon } from "@heroicons/react/24/solid";
import FindersCard from "../../components/finders/FindersCard";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import BodyCard from "../../components/body/BodyCard";

const Education = () => {
  const data = useSelector((state) => state.education);

  return (
    <>
      <HeadBanner
        headingsTitle={"Education"}
        headingSlug={"Practical guidance about Orthotropics."}
      />
      <BodyCard data={data} />
      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Education;

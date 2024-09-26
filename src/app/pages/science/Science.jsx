import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink, Navigate } from "react-router-dom";
import FindersCard from "../../components/finders/FindersCard";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector, useDispatch } from "react-redux";
import { scienceSinglePage } from "../../features/science/scienceSlice";
import BodyCard from "../../components/body/BodyCard";

const Science = () => {
  const data = useSelector((state) => state.science);

  const dispatch = useDispatch();

  const handleRedirect = (sendTo) => {
    dispatch(scienceSinglePage(sendTo));
  };
  return (
    <>
      <HeadBanner
        headingsTitle={"Science"}
        headingSlug={"Practical guidance about Orthotropics."}
      />
      <BodyCard data={data} />
      {/* <FindersCard background={"#1F323D"} /> */}
      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Science;

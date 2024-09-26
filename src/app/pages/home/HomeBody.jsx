import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomeBody = () => {
  const data = useSelector((state) => state.home);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto my-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-0  px-10 text-light-green20 w-full transition-all ease-in-out ">
          {data.map((datass) => (
            <div
              className="relative flex flex-col text-start py-5 m-2 p-3 rounded-3xl  bg-light-white10 z-20"
              key={datass.id}
            >
              <div className="text-4xl font-bold text-light-blue30 pt-2 ms-5">
                <h1 className="text-4xl font-bold text-light-blue30">
                  {datass.topic}
                </h1>
                <span className="text-xl">{datass.slug}</span>
              </div>

              <div className="py-6 ps-1 leading-10 ">
                {datass.inn.map((innerData) => (
                  <div
                    className="  flex font-bold leading-10 p-2 m-1  rounded-md "
                    key={innerData.id}
                  >
                    <div className="  bg-light-green30 flex justify-center items-center rounded-full size-8 p-1 text-light-white10">
                      <ArrowRightIcon className=" hover:translate-x-1  duration-200 transition-transform" />
                    </div>
                    <li className="list-none mx-2 underline text-xl ">
                      {innerData.listsInfo}
                    </li>
                  </div>
                ))}
                <div className="sticky bottom-4 start-6 ms-2 mt-3 ">
                  <NavLink
                    to={datass.path}
                    className="text-xl underline text-light-green20 flex"
                  >
                    {datass.visitlinkTitle}
                    <div className="flex justify-center items-center rounded-full size-8 p-1 ms-1">
                      <ArrowRightIcon className="hover:translate-x-1 ttext-light-green20 duration-200 transition-transform" />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeBody;

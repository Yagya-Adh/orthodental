import logo from "../../../assets/iafgg.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import HeadBanner from "../../components/heading/HeadBanner";
import { useSelector } from "react-redux";

const Events = () => {
  const datas = useSelector((state) => state.events);

  const currentDate = new Date();
  const options = { weekday: "long" };
  const formattedDay = currentDate.toLocaleDateString("en-US", options);
  const now = new Date();

  const formattedDateTime = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return (
    <>
      <HeadBanner headingsTitle={"Events"} headingSlug={""} />
      <div className="flex  max-w-screen-2xl mx-auto py-10">
        <button className="text-sm rounded-md border border-black text-center px-2 py-1 mx-2 hover:text-white font-bold hover:bg-light-green40">
          Today
        </button>
        <h1 className="mx-2 font-semibold text-xl font-sans">Upcoming</h1>
        <button className="mx-2 ">
          <ChevronDownIcon className="size-4" />
        </button>
      </div>{" "}
      <div className="py-3 bg-white pb-10">
        {datas?.map((data) => (
          <div className="relative" key={data.id}>
            <div className="flex items-center">
              <h1 className=" text-sm me-3 p-3 text-nowrap">{data.months}</h1>
              <div className="border border-light-black30 w-[88%]"></div>
            </div>
            <div className=" flex items-center">
              <div className="text-center p-2">
                <h5 className="mx-3 text-sm">{formattedDay} </h5>
                <h2 className="font-bold text-xl">{12}</h2>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-sm">
                  {formattedDateTime} {"-"} {formattedDateTime}
                </h2>
                <div className="grid grid-cols-2 gap-10 p-4 items-center px-10">
                  <div className="flex-col w-2/3">
                    <p className="font-bold hover:underline ">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nesciunt eos porro, aspernatur ratione, amet soluta,
                      dolore eaque nemo aperiam molestiae commodi mollitia
                      ipsum. Assumenda vero esse libero ea consequatur saepe.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nesciunt eos porro, aspernatur ratione, amet soluta,
                      dolore eaque nemo aperiam molestiae commodi mollitia
                      ipsum. Assumenda vero esse libero ea consequatur saepe.
                    </p>
                  </div>

                  <img src={logo} alt="imgs." className="scale-150" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;

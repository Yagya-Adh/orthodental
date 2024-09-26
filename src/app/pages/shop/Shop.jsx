import HeadBanner from "../../components/heading/HeadBanner";
import FindersCard from "../../components/finders/FindersCard.jsx";
import imgesNotFound from "../../../assets/react.svg";

import { useSelector, useDispatch } from "react-redux";
import { shopNow } from "../../features/shop/shopSlice.js";
import { NavLink } from "react-router-dom";
const Shop = () => {
  const shopData = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  return (
    <>
      <HeadBanner headingsTitle={"Shop"} headingSlug={""} />
      <div className="grid grid-cols-4 gap-2 rounded-md ">
        {shopData?.map((shopping) => (
          <div
            className="flex flex-col rounded-md  bg-light-white10  relative"
            key={shopping.id}
          >
            <div className="relative overflow-hidden">
              <img
                src={shopping.images ? shopping.images : imgesNotFound}
                alt="images_"
                className="scale-90 hover:scale-110 w-full"
              />
            </div>
            <h1 className="text-light-green40 font-bold px-1 leading-tight">
              {shopping.title}
            </h1>
            <h4 className="text-black p-1">
              {shopping.price && `£ ` + shopping.price}
            </h4>
            <div className="pt-1 ps-1">
              <h4 className="text-sm font-bold text-light-green20">
                shipping Info
              </h4>
              <div className="ps-1 pt-1">
                <select
                  name=""
                  id=""
                  className="border px-1 py-1 flex justify-center items-center ms-3 rounded-sm bg-light-white10 ring-1"
                >
                  <option value="">{"Within the EU"}</option>
                  <option value="">{"Outside the EU"}</option>
                </select>
              </div>

              <h4 className="text-sm font-bold text-light-green20">Sizes</h4>
              <select
                name=""
                id=""
                className="border px-1 py-1 flex justify-center items-center ms-3  rounded-sm bg-light-white10 ring-1"
              >
                <option value="">{"Mini"}</option>
                <option value="">{"Small with Handel"}</option>
              </select>
            </div>
            <button
              onClick={() => dispatch(shopNow(shopping.id))}
              className="sticky bottom-0 my-3 bg-light-green20 text-sm text-light-white10 rounded-sm flex items-center text-center justify-center py-2 hover:bg-light-green40 scale-95 hover:scale-100"
            >
              <NavLink to={`shop/${shopping.id}`}>Buy Now</NavLink>
            </button>
          </div>
        ))}
      </div>

      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Shop;
/* Suggest a product for our upcoming Mewing Shop!

click here

*/

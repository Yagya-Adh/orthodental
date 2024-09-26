import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Search = () => {
  const [result, setResult] = useState([]);
  const [textSearch, setTextSearch] = useState({ searching: "" });
  const navigate = useNavigate();

  const handelChnage = (e) => {
    const { name, value } = e.target;

    setTextSearch({
      ...textSearch,
      [name]: value,
    });

    // logics...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult([...result, textSearch]);
    setTextSearch({ searching: "" });
    navigate("/search-error");
  };

  const handleFinder = () => {
    // Navigate("/search-error");
  };

  // console.log(result.map(dd=>dd));
  return (
    <form className="flex " onSubmit={handleSubmit}>
      <div className="relative order-2 ">
        <input
          name="searching"
          value={textSearch.searching}
          onChange={handelChnage}
          type="text"
          className="px-2 m-0 focus:outline-none z-20  p-2 hidden sm:block"
        />
        <div
          className={`absolute top-2 right-0 flex justify-center items-center `}
        >
          <XMarkIcon className="size-6" />
        </div>
      </div>

      <button className=" z-20 flex items-center justify-center sm:order-4 ">
        <MagnifyingGlassIcon className="size-10 bg-[#237688] text-[white]" />
      </button>
    </form>
  );
};

export default Search;

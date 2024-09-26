import { ChevronRightIcon } from "@heroicons/react/24/solid";

const PillButton = ({ title, backgroundColor, textColor }) => {
  return (
    <button
      className={`min-w-fit rounded-full px-4 items-center py-3 text-2xl text-center flex justify-center ${backgroundColor} ${textColor} font-inter`}
    >
      {title ? title : ""}
      <ChevronRightIcon className="size-7 mx-2 hover:translate-x-2 duration-200 transition-transform " />
    </button>
  );
};

export default PillButton;

import React from "react";
import logoIAFGG from "../../assets/iafgg.svg";

const Logo = ({ size, tops, lefts }) => {
  return (
    <img
      src={logoIAFGG}
      className={`z-10 h-[1340px] opacity-10 absolute top-[${tops}px] left-[${lefts}px]`}
    />
  );
};

export default Logo;

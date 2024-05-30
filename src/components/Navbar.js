import React from "react";
import Link from "next/link";

const Navbar = ({ name, id, active, setActive }) => {
  return (
    <li
      onClick={() => {
        setActive(id);
      }}
      className={`${
        active === id
          ? "text-darkBlue border-b-4 border-b-limeGreen"
          : "text-grayishBlue"
      } cursor-pointer py-5`}
    >
      <Link href="/"> {name} </Link>
    </li>
  );
};

export default Navbar;

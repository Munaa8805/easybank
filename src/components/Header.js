"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [active, setActive] = useState(1);

  const headerData = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Contact",
    },
    {
      id: 4,
      name: "Blog",
    },
    {
      id: 5,
      name: "Careers",
    },
  ];
  return (
    <div className="container mx-auto flex justify-between items-center pt-5">
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="flex gap-10">
          {headerData.map((item) => (
            <Navbar
              key={item.id}
              name={item.name}
              id={item.id}
              setActive={setActive}
              active={active}
            />
          ))}
        </ul>
      </nav>
      <button className="bg-limeGreen text-white text-xl rounded-full py-3 px-6">
        Request Invite{" "}
      </button>
    </div>
  );
};

export default Header;

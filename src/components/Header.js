"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "./Button";
import closeImage from "../assets/icon-close.svg";

const Header = () => {
  const [active, setActive] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowScroll, setWindowScroll] = useState(false);

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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsMobileMenuOpen(false);
        setWindowScroll(true);
      } else {
        setWindowScroll(false);
      }
    });
  }, [windowScroll]);
  return (
    <div className="container mx-auto flex justify-between items-center py-5 px-10 md:pt-5">
      <div>
        <Logo />
      </div>
      <nav className="hidden md:inline-block">
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
      {isMobileMenuOpen && (
        <div className=" bg-red-500 flex flex-col items-center justify-center pointer w-full mt-5 md:hidden">
          <ul className="bg-gray-200 w-[90%] mx-auto fixed top-20 left-[5%] rounded flex flex-col  items-center p-10">
            {headerData.map((item) => (
              <li
                onClick={() => {
                  setActive(item.id);
                }}
                className={`${
                  active === item.id
                    ? "text-darkBlue border-b-4 w-full text-center border-b-limeGreen"
                    : "text-grayishBlue"
                } cursor-pointer py-2`}
              >
                <Link href="/"> {item.name} </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="md:hidden">
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <Image src={closeImage} alt="close" width={20} height={20} />
        </button>
      </div>

      <div className="hidden md:block">
        <Button>Request Invite</Button>
      </div>
    </div>
  );
};

export default Header;

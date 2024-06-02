import React from "react";
import Image from "next/image";
import Button from "./Button";
import Logo from "@/assets/logo-white.svg";
import FacIcon from "@/assets/icon-facebook.svg";
import TwitIcon from "@/assets/icon-twitter.svg";
import InstaIcon from "@/assets/icon-instagram.svg";
import YoutubeIcon from "@/assets/icon-youtube.svg";
import PinterestIcon from "@/assets/icon-pinterest.svg";

const Footer = () => {
  const data = [
    {
      id: 1,
      col: [
        { id: 1, name: "About Us" },
        {
          id: 2,
          name: "Contact",
        },
        { id: 3, name: "Blog" },
      ],
    },
    {
      id: 2,
      col: [
        {
          id: 4,
          name: "Careers",
        },
        {
          id: 5,
          name: "Support",
        },
        {
          id: 6,
          name: "Privacy Policy",
        },
      ],
    },
  ];
  const socialData = [
    {
      id: 1,
      name: "Facebook",
      href: "@/assets/icon-facebook.svg",
      icon: FacIcon,
    },
    {
      id: 2,
      name: "Twitter",
      href: "./assets/icon-twitter.svg",
      icon: TwitIcon,
    },
    {
      id: 3,
      name: "Instagram",
      href: "./assets/icon-instagram.svg",
      icon: InstaIcon,
    },
    {
      id: 4,
      name: "Youtube",
      href: "./assets/icon-youtube.svg",
      icon: YoutubeIcon,
    },
    {
      id: 5,
      name: "Pinterest",
      href: "./assets/icon-pinterest.svg",
      icon: PinterestIcon,
    },
  ];
  return (
    <footer className="bg-[#3E52A3] py-10 ">
      <section
        className="container mx-auto flex flex-col justify-between items-center
       gap-5 md:flex-row "
      >
        <div
          className="flex flex-col gap-5
         justify-between items-center md:flex-row"
        >
          <div className="flex gap-5 flex-col justify-between  ">
            <div className="w-full h-[100%] mb-5 flex justify-center">
              <Image
                src={Logo}
                width={500}
                height={500}
                alt="Logo"
                style={{ width: "60%", height: "100%" }}
              />
            </div>
            <div className="flex gap-5 justify-center w-full ">
              {socialData.map((item) => {
                return (
                  <Image
                    //   src={item.href}
                    src={item.icon}
                    alt={item.name}
                    key={item.id}
                    width={500}
                    height={500}
                    style={{ width: "20px", height: "20px" }}
                  />
                );
              })}
            </div>
          </div>
          <div className="text-white flex flex-col gap-1 md:gap-10 md:flex-row md:ml-20">
            {data.map((item) => {
              return (
                <ul className="text-center md:text-start">
                  {item.col.map((x) => {
                    return (
                      <li className="py-1 cursor-pointer font-thin hover:text-limeGreen duration-200 ease-in-out">
                        {x.name}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 items-center">
          <Button>Request Invite</Button>
          <p className="text-grayishBlue font-thin text-sm">
            &#64; Easybank. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

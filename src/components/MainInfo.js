import React from "react";
import Image from "next/image";
import Button from "./Button";
import bigImage from "../assets/bg-intro-desktop.svg";
import mockUpImage from "../assets/image-mockups.png";
import smallImage from "../assets/bg-intro-mobile.svg";

const MainInfo = () => {
  /**
   * Function to contact me.
   */
  // function contactMe() {
  //   let name = "Munaa Tsetsegmaa";
  //   let title = "Frontend Developer";
  //   let email = "munaa.tsetsegmaa@gmail.com";
  //   let phone = "+604 837 6229";
  //   let url = "https://www.munaa.dev";
  // }

  // contactMe();

  // (function repeat() {
  //   [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Next.js",
  //     "React",
  //     "Tailwind CSS",
  //     "Node.js",
  //   ].map((skill) => {
  //     eat();
  //     sleep();
  //     coffeeLoader();
  //     code(skill);
  //   });
  // })();
  return (
    <div className="py-10 bg-[#f9f9f9]">
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between">
        <div className="flex flex-col text-center md:justify-start gap-5 md:text-start">
          <h1 className="font-semi text-2xl break-words md:text-4xl ">
            Next generation digital banking
          </h1>
          <p className="px-10 font-thin text-grayishBlue break-words md:px-0">
            Take your financial online. Your Easybank account will be a
            one-stop-shop for
            <br /> spending, saving budgeting, investing, and much more.
          </p>
          <div>
            <Button>Request Invite</Button>
          </div>
        </div>
        <div className="relative w-[250px] h-[250px]  md:w-[750px] md:h-[750px]">
          <div className="absolute top-0 right-0  md:-top-20 md:-right-20">
            <Image
              src={bigImage}
              alt="big image"
              height={500}
              width={500}
              className=" w-[250px] h-[250px] md:w-[750px] md:h-[750px]"
            />
          </div>
          <div className="absolute z-20 top-0 left-0  translate-x-6 translate-y-6">
            <Image
              src={mockUpImage}
              alt="mockup image"
              height={500}
              width={500}
              className=" w-[200px] h-[200px] md:w-[700px] md:h-[700px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;

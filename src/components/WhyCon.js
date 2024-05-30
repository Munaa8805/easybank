import React from "react";
import InfoCard from "./InfoCard";
import cardIcon from "../assets/icon-online.svg";
import cardIcon2 from "../assets/icon-budgeting.svg";
import cardIcon3 from "../assets/icon-onboarding.svg";
import cardIcon4 from "../assets/icon-api.svg";

const WhyCon = () => {
  const data = [
    {
      id: 1,
      name: "Online Banking",
      icon: cardIcon,
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      id: 2,
      name: "Simple Budgeting",
      icon: cardIcon2,
      description:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      id: 3,
      name: "Fast Onboarding",
      icon: cardIcon3,
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      id: 4,
      name: "Open API",
      icon: cardIcon4,
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <section className="bg-lightGrayishBlue py-10">
      <div className="container mx-auto my-10 px-5 md:px-0">
        <div className="text-center md:text-start">
          <h3 className="text-darkBlue text-3xl">Why choose Easybank?</h3>
          <p className="text-grayishBlue py-5 w-full md:w-[40%]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.{" "}
          </p>
        </div>
        <div className="flex gap-5 pt-5 flex-col justify-between md:flex-row">
          {data.map((item) => (
            <InfoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCon;

import React from "react";
import Image from "next/image";

const InfoCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="w-[50px] h-[50px] mb-5 rounded overflow-hidden md:mb-10 md:w-[100px] md:h-[100px] ">
        <Image
          src={item.icon}
          alt={item.name}
          width={500}
          height={500}
          className="h-full"
        />
      </div>
      <h4 className="text-darkBlue text-xl md:text-2xl">{item.name}</h4>
      <p className="text-grayishBlue text-center md:text-start">
        {item.description}
      </p>
    </div>
  );
};

export default InfoCard;

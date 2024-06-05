import React from "react";
import Image from "next/image";

const Article = ({ item }) => {
  return (
    <div className="group max-w-sm bg-lightGrayishBlue font-light rounded-lg cursor-pointer hover:bg-veryLightGray ease-in-out duration-200">
      <a href="#">
        <Image
          src={item.image}
          alt="article image"
          width={500}
          height={500}
          className="h-[300px] w-full object-cover rounded-t-lg"
        />
      </a>
      <div className="p-5">
        <span className="text-grayishBlue py-5">{`by ${item.author}`}</span>
        <h5 className="mb-2 text-2xl text-darkBlue py-5 group-hover:text-limeGreen">
          {item.title}
        </h5>
        <p className="mb-3  text-grayishBlue">{item.description}</p>
      </div>
    </div>
  );
};

export default Article;

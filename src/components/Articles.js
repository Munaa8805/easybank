import React from "react";
import Article from "./Article";
import image1 from "../assets/image-currency.jpg";
import image2 from "../assets/image-restaurant.jpg";
import image3 from "../assets/image-plane.jpg";
import image4 from "../assets/image-confetti.jpg";

const Articles = () => {
  const data = [
    {
      id: 1,
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      image: image1,
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      id: 2,
      author: "Wilson Hutton",
      image: image2,
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      id: 3,
      author: "Wilson Hutton",
      image: image3,
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      id: 4,
      author: "Claire Robinson",
      image: image4,
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    },
  ];
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="font-light text-2xl text-center text-darkBlue my-10 md:text-start md:text-4xl">
          Latest Articles
        </h2>
        <div className="flex flex-col  items-center gap-5 justify-between md:flex-row md:items-stretch">
          {data.map((item) => (
            <Article key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

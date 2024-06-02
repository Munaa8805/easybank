import React from "react";
import Button from "./Button";

const MainInfo = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between">
        <div className="flex flex-col text-center md:justify-start gap-5 md:text-start">
          <h1 className="font-semi text-2xl break-words md:text-4xl ">
            Next generation digital banking
          </h1>
          <p className="font-thin text-grayishBlue break-words">
            Take your financial online. Your Easybank account will be a
            one-stop-shop for spending, saving budgeting, investing, and much
            more.
          </p>
          <div>
            <Button>Request Invite</Button>
          </div>
        </div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default MainInfo;

import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Logo = () => {
  return <Image src={logo} alt="logo" />;
};

export default Logo;

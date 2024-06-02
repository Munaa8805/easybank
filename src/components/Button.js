import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-limeGreen to-blue-400 py-2 px-6 rounded-full text-white">
      {children}
    </button>
  );
};

export default Button;

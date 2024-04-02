import React from 'react';

const Button = ({ children, onClick, variant }) => {
  
  let buttonClassName = "font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-5 mb-5";
  if (variant === "primary") {
    buttonClassName += " bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white w-60 mx-5";
  } else if (variant === "secondary") {
    buttonClassName += " bg-red-100 hover:bg-[#253237] text-black hover:text-white w-60 mx-5";
  } else if (variant === "outline") {
    buttonClassName += " bg-transparent border border-white hover:bg-[#ffffff] text-white hover:text-black w-60 mx-5"
  } else if (variant === "big") {
    buttonClassName += " bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white w-[100%]";
  } else if (variant === "close") {
    buttonClassName += " bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white w-30 ";
  }else if (variant === "outline-black") {
    buttonClassName += " bg-transparent border border-[#253237] hover:bg-[#253237] text-black hover:text-white w-60 mx-5"
  }

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
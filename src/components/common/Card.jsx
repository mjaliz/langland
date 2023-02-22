import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className="flex items-center px-3 bg-white h-20 w-full rounded-lg shadow-sm my-1 mx-auto">
      <img
        src={image}
        alt="country"
        className="w-14 rounded-full ring-4 ring-gray-light mr-5"
      />
      <p className="text-lg font-bold">{text}</p>
    </div>
  );
};

export default Card;

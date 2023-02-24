import React from "react";

const Card = ({ image, imgSize, text, classes, onClick }) => {
  return (
    <div
      className={`flex items-center px-5 bg-white h-20 rounded-lg shadow-sm my-1 mx-auto ${classes}`}
      onClick={onClick}
    >
      {image && (
        <div className="flex items-center justify-center w-14 h-14 rounded-full ring-4 ring-gray-light mr-5 overflow-hidden">
          <img
            src={image}
            alt="country"
            className={`object-contain ${imgSize}`}
          />
        </div>
      )}
      <p className="text-lg font-bold">{text}</p>
    </div>
  );
};

export default Card;

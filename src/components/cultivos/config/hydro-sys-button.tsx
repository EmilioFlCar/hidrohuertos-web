"use client";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

function HydroSystemButton({
  title,
  description,
  isActive = false,
  onSelect,
}: {
  title: string;
  description: string;
  isActive?: boolean;
  onSelect?: (title: string) => void;
}) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(title);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-sm border-2 bg-white ${
        isActive ? "border-green-500" : "border-gray-400"
      }`}
    >
      <div className="flex flex-row items-center">
        <h1 className="text-sm pr-2">{title}</h1>
        <div className="tooltip">
          <div className="tooltip-content bg-gray-300 text-gray-600">
            <p>{description}</p>
          </div>
          <FaInfoCircle className="text-green-500 h-3 w-3" />
        </div>
      </div>
    </button>
  );
}

export default HydroSystemButton;

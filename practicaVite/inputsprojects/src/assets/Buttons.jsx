import React from "react";

export const Button = ({ text }) => {
  return (
    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
      {text}
    </button>
  );
};

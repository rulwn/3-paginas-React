import React from "react";

export const InputField = ({ placeholder }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className="w-full p-3 border-none rounded-xl bg-blue-500 text-white placeholder-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  );
};
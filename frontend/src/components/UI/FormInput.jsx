import React from "react";

const FormInput = ({ label, type = "text", name, placeholder, focusColor}) => {
  const ringClass={
    "green": "focus:ring-green-500",
    "blue": "focus:ring-blue-500",
    "red": "focus:ring-red-500",
  }[focusColor] || "focus:ring-black-500";
  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 ${ringClass}`}
      />
    </div>
  );
};

export default FormInput;

import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 border-gray-300">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="flex-1 bg-transparent text-sm py-3 mr-3 rounded border-gray-300 outline-none"
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-sky-400 cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-gray-400 cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;

import { InputHTMLAttributes, memo } from "react";

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="bg-[#f8f8f8aa] rounded-lg shadow-md border border-indigo-200 focus:border-indigo-500 focus:outline-0 p-1 "
      {...rest}
    />
  );
};

export default memo(Input);

import { LiHTMLAttributes } from "react";

interface IProps extends LiHTMLAttributes<HTMLLIElement> {
  color: string;
  className?: string;
}

const CircleColor = ({ color, className, ...rest }: IProps) => {
  return (
    <li
      {...rest}
      className={`w-4 h-4 rounded-full ${className}`}
      style={{ backgroundColor: color }}
    ></li>
  );
};

export default CircleColor;

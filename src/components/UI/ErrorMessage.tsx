interface IProps {
  msg: string;
}

const ErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-600 font-normal text-sm">{msg}</span>
  ) : null;
};

export default ErrorMessage;

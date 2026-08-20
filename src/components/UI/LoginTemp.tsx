const LoginTemp = ({
  imgurl,
  title,
  className,
}: {
  imgurl: string;
  title: string;
  className?: string;
}) => {
  return (
    <div className="flex-1 relative sm:block hidden">
      <h1
        className={`absolute top-3 left-[50%] -translate-x-[50%] text-3xl w-full text-center ${className}`}
      >
        {title}
      </h1>
      <img src={imgurl} alt={title} className="size-full object-cover " />
    </div>
  );
};

export default LoginTemp;

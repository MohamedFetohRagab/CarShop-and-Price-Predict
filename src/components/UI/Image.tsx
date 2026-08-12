interface IProps {
  ImageSrc: string;
  alt?: string;
  ClassName?: string;
}

const Image = ({ ClassName, ImageSrc, alt }: IProps) => {
  return (
    <>
      <img src={ImageSrc} alt={alt} className={ClassName} />
    </>
  );
};

export default Image;

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import { IProduct } from "../../interfaces";
import { textSlicer } from "../../Utils/Functions";
import Image from "../UI/Image";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { carBrand, price, description, imageURL, id } = product;

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border border-[#ddd] rounded-md p-2 flex flex-col space-y-3">
      <Image
        ImageSrc={imageURL}
        ClassName="rounded-lg  object-cover h-[200px]"
        alt={carBrand}
      />
      <h3 className="m-0 font-medium text-[20px] hover:text-gray-800">
        {carBrand}
      </h3>
      <p className="text-gray-700">
        {textSlicer(description)}
        <a
          href={`cars/${id}`}
          className="text-blue-500 underline cursor-pointer hover:text-blue-700"
        >
          Read More
        </a>
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-semibold text-[20px]">${price}</span>
        <a
          href={`cars/${id}`}
          className="bg-gray-600 hover:bg-gray-800 py-2 px-5 flex items-center justify-between rounded-sm p-1 cursor-pointer text-white"
        >
          View More <ChevronRightIcon width={18} />
        </a>
      </div>
    </div>
  );
};

export default memo(ProductCard);

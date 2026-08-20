import { Eye, Pen, Trash } from "lucide-react";
import { productList } from "../../data";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../UI/table";
import { IProduct } from "@/interfaces";
const Dashboard = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productList.map(({ imageURL, price, id, carBrand }: IProduct) => (
          <TableRow className="border-b border-black">
            <TableCell>
              <img
                src={imageURL}
                className="rounded-lg object-cover sm:size-[200px] size-[100px]"
                alt={carBrand}
              />
            </TableCell>
            <TableCell>
              <h1 className="mt-1 text-sm sm:text-xl font-bold tracking-tight text-slate-900 ">
                {carBrand}
              </h1>
            </TableCell>
            <TableCell>
              <span className="font-semibold text-sm sm:text-[20px]">
                ${price}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex flex-col gap-2 justify-between items-center mt-3">
                <a
                  href={`cars/${id}`}
                  className="bg-gray-600 hover:bg-gray-800 py-2 px-5 flex items-center justify-between rounded-sm p-1 cursor-pointer text-white"
                >
                  <Eye width={18} />
                </a>
                <button className="bg-red-600 hover:bg-red-800 py-2 px-5 flex items-center justify-between rounded-sm p-1 cursor-pointer text-white">
                  <Trash width={18} />
                </button>
                <button className="bg-green-600 hover:bg-green-800 py-2 px-5 flex items-center justify-between rounded-sm p-1 cursor-pointer text-white">
                  <Pen width={18} />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Dashboard;

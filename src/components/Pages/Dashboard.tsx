import { Eye, Pen, Trash } from "lucide-react";
import { productList } from "../../data";
// import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../UI/table";
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
        {productList.map(({ title, imageURL, price, id, description }) => (
          <TableRow>
            <TableCell>
              <img
                src={imageURL}
                className="rounded-lg object-cover max-h-[200px] w-[200px]"
                alt={title}
              />
            </TableCell>
            <TableCell>
              <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 ">
                {title}
              </h1>
            </TableCell>
            <TableCell>
              <span className="font-semibold text-[20px]">${price}</span>
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

import React from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

export const RecentTransactions = () => {
  return (
    <div className="col-span-12 p-6 rounded-xl border border-stone-300 shadow-sm bg-white">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
          <FiDollarSign /> Recent Transactions
        </h3>
        <button className="text-sm text-violet-600 hover:underline font-medium transition-colors">
          See all
        </button>
      </div>

      {/* Scrollable table container */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full min-w-[600px] text-sm text-stone-700">
          <TableHead />
          <tbody>
            {transactionData.map((tx, index) => (
              <TableRow key={index} {...tx} order={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableHead = () => (
  <thead>
    <tr className="text-xs uppercase tracking-wide text-stone-500 border-b">
      <th className="p-3 text-left">Customer ID</th>
      <th className="p-3 text-left">SKU</th>
      <th className="p-3 text-left">Date</th>
      <th className="p-3 text-left">Price</th>
      <th className="w-12"></th>
    </tr>
  </thead>
);

const TableRow = ({
  cusId,
  sku,
  date,
  price,
  order,
}: {
  cusId: string;
  sku: string;
  date: string;
  price: string;
  order: number;
}) => (
  <tr
    className={`${
      order % 2 ? "bg-stone-100/50" : "bg-white"
    } hover:bg-stone-200/50 transition-colors`}
  >
    <td className="p-3 font-medium text-violet-700 underline flex items-center gap-1">
      <a href="#" className="flex items-center gap-1">
        {cusId} <FiArrowUpRight className="text-xs" />
      </a>
    </td>
    <td className="p-3">{sku}</td>
    <td className="p-3">{date}</td>
    <td className="p-3 font-semibold">{price}</td>
    <td className="p-3 text-center">
      <button className="hover:bg-stone-200 p-2 rounded-full transition-colors">
        <FiMoreHorizontal className="text-xl" />
      </button>
    </td>
  </tr>
);

// Example transaction data
const transactionData = [
  { cusId: "#48149", sku: "Pro 1 Month", date: "Aug 2nd", price: "$9.75" },
  { cusId: "#1942s", sku: "Pro 3 Month", date: "Aug 2nd", price: "$21.25" },
  { cusId: "#4192", sku: "Pro 1 Year", date: "Aug 1st", price: "$94.75" },
  { cusId: "#99481", sku: "Pro 1 Month", date: "Aug 1st", price: "$9.44" },
  { cusId: "#1304", sku: "Pro 1 Month", date: "Aug 1st", price: "$9.23" },
  { cusId: "#1304", sku: "Pro 3 Month", date: "Jul 31st", price: "$22.02" },
];

import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCards = () => {
  const stats = [
    {
      title: "Gross Revenue",
      value: "$120,054.24",
      pillText: "+2.75%",
      trend: "up",
      period: "From Jan 1st - Jul 31st",
    },
    {
      title: "Avg Order",
      value: "$27.97",
      pillText: "-1.01%",
      trend: "down",
      period: "From Jan 1st - Jul 31st",
    },
    {
      title: "Trailing Year",
      value: "$278,054.24",
      pillText: "+60.75%",
      trend: "up",
      period: "Previous 365 days",
    },
  ] as const;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          value={item.value}
          pillText={item.pillText}
          trend={item.trend}
          period={item.period}
        />
      ))}
    </div>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
}) => {
  return (
    <div className="flex flex-col justify-between p-5 rounded-xl border border-stone-200 shadow bg-white hover:shadow-md transition-all min-h-[180px] w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-stone-600 font-semibold">{title}</div>
        <span
          className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
        </span>
      </div>
      <p className="text-3xl font-bold text-stone-950">{value}</p>
      <p className="text-xs text-stone-500 mt-2">{period}</p>
    </div>
  );
};

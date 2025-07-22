"use client";

import React from "react";
import { FiUser } from "react-icons/fi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Returning: 275, New: 41 },
  { name: "Feb", Returning: 620, New: 96 },
  { name: "Mar", Returning: 202, New: 192 },
  { name: "Apr", Returning: 500, New: 50 },
  { name: "May", Returning: 355, New: 400 },
  { name: "Jun", Returning: 875, New: 200 },
  { name: "Jul", Returning: 700, New: 205 },
];

export const ActivityGraph = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded-xl border border-stone-200 shadow-lg bg-white dark:bg-stone-900">
      <div className="p-5 border-b border-stone-200 dark:border-stone-700">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-stone-800 dark:text-stone-100">
          <FiUser className="text-primary" /> Activity Overview
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Monthly user engagement data (Returning vs New)
        </p>
      </div>

      <div className="h-72 px-5 py-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280", fontWeight: 600 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280", fontWeight: 600 }}
            />
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: "0.5rem",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              }}
              labelStyle={{ color: "#6b7280", fontSize: 12 }}
              itemStyle={{ fontSize: 12 }}
              cursor={{ stroke: "#94a3b8", strokeWidth: 0.5 }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Line
              type="monotone"
              dataKey="New"
              stroke="#0ea5e9"
              strokeWidth={2.5}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Returning"
              stroke="#7c3aed"
              strokeWidth={2.5}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

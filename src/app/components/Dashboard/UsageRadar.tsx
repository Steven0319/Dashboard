"use client";

import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { feature: "Tracking", mobile: 15, desktop: 110, max: 150 },
  { feature: "Builder", mobile: 130, desktop: 90, max: 150 },
  { feature: "Schedule", mobile: 86, desktop: 130, max: 150 },
  { feature: "AI Train", mobile: 125, desktop: 40, max: 150 },
  { feature: "Interval", mobile: 148, desktop: 90, max: 150 },
];

export const UsageRadar = () => {
  return (
    <div className="col-span-12 md:col-span-4 overflow-hidden rounded-xl border border-stone-300 bg-white shadow-sm">
      <div className="p-4 border-b border-stone-200 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold text-stone-800">
          <FiEye className="text-violet-600" /> Usage Overview
        </h3>
      </div>

      <div className="h-64 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e4e4e7" />
            <PolarAngleAxis
              dataKey="feature"
              tick={{ fill: "#334155", fontSize: 12, fontWeight: 500 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              tick={{ fill: "#64748b", fontSize: 10 }}
              axisLine={false}
            />
            <Radar
              name="Mobile"
              dataKey="mobile"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.3}
            />
            <Radar
              name="Desktop"
              dataKey="desktop"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.3}
            />
            <Tooltip
              contentStyle={{
                fontSize: "0.875rem",
                borderRadius: "0.375rem",
                border: "1px solid #e5e7eb",
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: "0.75rem", color: "#334155" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

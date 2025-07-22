import React from "react";
import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
  return (
    <div className="border-b border-stone-200 px-6 py-4 mb-6 bg-white rounded-t-lg shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <span className="text-base font-semibold text-stone-900 block">
            🚀 Good morning, Tom!
          </span>
          <span className="text-sm text-stone-500">
            Tuesday, Aug 8th 2023
          </span>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-stone-700 bg-stone-100 hover:bg-violet-100 hover:text-violet-700 px-4 py-2 rounded-md transition-all">
          <FiCalendar className="text-lg" />
          <span>Previous 6 Months</span>
        </button>
      </div>
    </div>
  );
};

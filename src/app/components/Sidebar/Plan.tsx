import React from "react";

export const Plan = () => {
  return (
    <div className="sticky top-[calc(100vh-64px)] border-t border-stone-300 bg-white p-4 text-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h4 className="font-bold text-stone-800">Enterprise</h4>
          <p className="text-stone-500 text-xs">Pay as you go</p>
        </div>

        <button
          className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 transition-colors rounded-md"
          aria-label="Contact Support"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

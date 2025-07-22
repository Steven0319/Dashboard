"use client";

import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./CommandMenu";

export const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center w-full justify-between px-3 py-2 rounded-md text-sm bg-stone-100 hover:bg-stone-200 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-1"
      >
        <span className="flex items-center gap-2 text-stone-500">
          <FiSearch />
          <span className="text-stone-600">Search</span>
        </span>

        <span className="flex items-center gap-1 rounded bg-white border text-xs px-2 py-1 shadow text-stone-700">
          <FiCommand size={12} />
          K
        </span>
      </button>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};

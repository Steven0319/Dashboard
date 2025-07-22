"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const AccountToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button
        onClick={handleToggle}
        className="flex w-full items-center gap-3 p-3 rounded-lg transition-all hover:bg-stone-100"
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-violet-500 shadow shrink-0">
          <Image
            src="https://api.dicebear.com/9.x/notionists/svg"
            alt="User avatar"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 text-start">
          <p className="text-base font-semibold text-stone-800">
            Tom Is Loading
          </p>
          <p className="text-xs text-stone-500">tom@hover.dev</p>
        </div>

        {isOpen ? (
          <FiChevronUp className="text-stone-600 transition-transform duration-200" />
        ) : (
          <FiChevronDown className="text-stone-600 transition-transform duration-200" />
        )}
      </button>

      {isOpen && (
        <div className="mt-3 px-3 space-y-2 text-sm text-stone-600">
          <button className="w-full text-left hover:text-violet-700">
            Account Settings
          </button>
          <button className="w-full text-left hover:text-violet-700">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

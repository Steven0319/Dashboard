import React from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen border-r border-stone-300 bg-white">
      {/* Scrollable area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

      {/* Sticky bottom */}
      <div className="p-4 border-t border-stone-200">
        <Plan />
      </div>
    </aside>
  );
};

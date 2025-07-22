import React from "react";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import { RecentTransactions } from "./RecentTransactions";

export const Grid = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* StatCards ocupa toda la fila */}
      <div className="md:col-span-8 col-span-12">
        <StatCards />
      </div>

      {/* ActivityGraph y UsageRadar en la misma fila */}
      <div className="md:col-span-8 col-span-12">
        <ActivityGraph />
      </div>
      <div className="md:col-span-4 col-span-12">
        <UsageRadar />
      </div>

      {/* RecentTransactions ocupa toda la fila */}
      <div className="md:col-span-12 col-span-12">
        <RecentTransactions />
      </div>
    </div>
  );
};

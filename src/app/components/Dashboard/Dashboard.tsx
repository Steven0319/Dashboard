import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";

export const Dashboard = () => {
  return (
    <div className="rounded-2xl bg-white dark:bg-stone-900 shadow-xl border border-stone-200 dark:border-stone-700 overflow-hidden">
      <div className="p-6 border-b border-stone-200 dark:border-stone-700">
        <TopBar />
      </div>
      <div className="p-6">
        <Grid />
      </div>
    </div>
  );
};

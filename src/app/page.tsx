"use client";

import React from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-stone-100 text-stone-950 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        <Dashboard />
      </div>
    </main>
  );
}

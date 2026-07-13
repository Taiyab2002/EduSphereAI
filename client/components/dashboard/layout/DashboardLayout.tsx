"use client";

import { ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto p-8">

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          <Sidebar />

          <div>
            {children}
          </div>

        </div>

      </div>
    </main>
  );
}
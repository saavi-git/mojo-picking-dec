"use client";

import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "../lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export function PageLayout({
  children,
  pageTitle,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Sidebar />
      <main
        className={cn(
          "ml-64 p-8 min-h-screen"
        )}
        style={{ transition: "margin-left 0.3s ease" }}
      >
        {/* Main dashboard container */}
        <div className="bg-white rounded-xl shadow-sm p-6 min-h-full">
          {pageTitle && (
            <h1 className="text-2xl font-bold mb-6 text-gray-900">{pageTitle}</h1>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}

"use client";
import React from "react";
import { NavBar } from "@/app/components/navBar";

export default function PoetryPage() {
  return (
    <main className="p-6 space-y-8 flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mt-10">Welcome to My Poetry Portfolio</h1>
          <p>Read some of my favourite or latest poems</p>
        </div>
        <div className="mr-5">
          <NavBar />
        </div>
      </div>
    </main>
  );
}

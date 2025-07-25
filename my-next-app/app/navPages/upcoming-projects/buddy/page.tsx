"use client";
import React from "react";
import { NavBar } from "@/app/components/navBar";

export default function BuddyPage() {
  return (
        <>
        <header className="bg-black pt-5 flex justify-center items-center">
        <div className="w-full flex justify-between items-center mb-8">
            <div>
          <h1 className="text-5xl ml-8 font-bold text-left text-white mt-5">Buddy</h1>
          <p className="font-bold text-white mt-2 ml-9">This is Buddy and it is one of my upcoming projects</p>
        </div>
        <div className="mr-5">
          <NavBar />
            </div>
        </div>
        </header>
    </>
  );
}

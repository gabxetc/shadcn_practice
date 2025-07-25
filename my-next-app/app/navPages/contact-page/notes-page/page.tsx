"use client";
import React from "react";
import { NavBar } from "@/app/components/navBar";
import NotFound from "@/app/not-found";

export default function NotesPage() {
  return (
        <>
        <header className="bg-black pt-5 flex justify-center items-center">
        <div className="w-full flex justify-between items-center mb-8">
            <div>
          <h1 className="text-5xl ml-8 font-bold text-left text-white mt-5">Have Something To Say?</h1>
          <p className="font-bold text-white mt-2 ml-9">Why not tell me what you think and leave a note!</p>
        </div>
        <div className="mr-5">
          <NavBar />
            </div>
        </div>
        </header>
        <body>
          <NotFound/>
        </body>
    </>
  );
}
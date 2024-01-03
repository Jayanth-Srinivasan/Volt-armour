import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Landing() {
  return (
    <main className=" bg-[url('/assets/hero-bg.png')] font-mont  w-full h-screen">
      <div className="w-full h-full p-4 md:px-16 py-[50px] md:py-[80px] lg:max-w-5xl lg:mx-auto text-white flex gap-6 justify-center items-center flex-col text-center">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-3xl leading-tight md:text-6xl font-bold">
            Power Up Your Battery Testing:
            <span className="text-[#FFCC00]">
               Volt Armour
            </span>
          </h1>
          <p className="md:text-lg text-md font-medium font-mono">
            Revolutionize battery testing with our ML-driven platform. <br />
            Power up, stand out!
          </p>
        </div>
        <div className="">
          <Button asChild className="h-14 w-full rounded-lg bg-amber-400 text-black font-semibold text-lg py-5 px-16 transition-all duration-300 hover:bg-amber-400 hover:scale-105  md:w-fit">
            <Link href={'/batt-parameters'} target={"_self"}>
                Try it now
            </Link> 
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Landing;

import React from "react";
import Link from "next/link";
import Socials from "./Socials";

export default function Intro() {
    return (
        <div id="Intro" className="w-full">
            <div className="w-full flex mt-24 mb-12">
            <div className="flex flex-col justify-center">
                <Socials className="" direction='flex-col'/>
            </div>
            <div className="pb-5 flex flex-col items-center flex-grow">
                <h1 className="text-center">Joshua Andersland</h1>
                <h4 className="mt-4 text-white mx-6 md:w-2/4 text-center">
                A proficient <span className="text-teal-300">Full Stack Developer</span>, engineering</h4> <h4 className="mt-4 text-white mx-6 md:w-2/4 text-center">cohesive web platforms that excel in both</h4> <h4 className="mt-4 text-white mx-6 md:w-2/4 text-center">frontend interactivity and backend stability.</h4>
                <Link
                    href="#Projects"
                    className="bg-fuchsia-500 text-gray-950 rounded hover:bg-fuchsia-300 mt-16 px-8 py-3"
                >
                    Projects
                </Link>
            </div>
            </div>
        </div>
        
    );
}

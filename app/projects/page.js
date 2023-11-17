import React from "react";
import Image from "next/image";

export default function Projects() {
    return (
        <div>
            <h1 className="text-center my-10">Projects</h1>
            <div className="flex flex-row justify-evenly">
                <div className="bg-gray-700">
                    <h2 className="text-center">Workout App</h2>
                    <Image src="/github-mark-white.svg" width={250} height={250} />
                </div>
                <div className="bg-gray-700">
                    <h2 className="text-center">Diving App</h2>
                    <Image src="/github-mark.svg" width={250} height={250} />
                </div>
            </div>
        </div>
    );
}

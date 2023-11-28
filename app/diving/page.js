import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Diving() {
    return (
        <div className="text-white flex flex-col mx-16 mt-24 space-y-6">
            <h1 className="text-center">Diving App</h1>

            <div>
                <h3 className="mt-2">Description</h3>
                <p>
                    Dive into efficiency with my diving meet score tracking app,
                    designed to streamline the way you monitor diving
                    competitions. It offers real-time tracking of all dives and
                    scores, either for individual divers or the entire meet,
                    allowing you to stay updated on placements and performances
                    as they happen. Choose between inputting each judge&apos;s score
                    for detailed accuracy or use the composite score for quicker
                    entries. This app isn&apos;t just a tool for meets; it&apos;s a
                    comprehensive solution for tracking progress throughout the
                    diving season, making it a great tool for parents of a
                    diver.
                </p>
            </div>

            <div>
                <h3 className="mt-2">Tech Stack</h3>
                <p>
                    This application harnesses the power of ReactJS and NextJS,
                    integrated with Bootstrap for a responsive and dynamic
                    frontend experience. For state management, Redux is
                    employed, ensuring efficient handling of application state.
                    The backend architecture is built on MongoDB, providing a
                    robust database solution, while NextJS API routes are
                    utilized for seamless server-side operations. Security is
                    paramount, and my custom authentication system reflects this
                    by using JWT/cookie-based solutions, combined with bcrypt
                    for reliable password hashing and salting.
                </p>
            </div>
            <div className="flex flex-col space-y-6 items-center sm:space-y-0 sm:items-start sm:flex-row sm:space-x-6 justify-center">
                <div>
                    <Link
                        href="https://diveapp-cce6b60b0629.herokuapp.com/"
                        className="bg-fuchsia-500 text-gray-950 rounded hover:bg-fuchsia-300 mt-16 px-8 py-3"
                    >
                        App Link
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://github.com/joand003/divingapp"
                        className="bg-fuchsia-500 text-gray-950 rounded hover:bg-fuchsia-300 mt-16 px-8 py-3"
                    >
                        Github
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Image
                    src="/divingapp.png"
                    alt="Image of my diving app"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
}

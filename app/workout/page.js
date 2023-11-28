import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Workout() {
    return (
        <div className="text-white flex flex-col mx-16 mt-24 space-y-6">
            <h1 className="text-center">Workout App</h1>

            <div>
                <h3 className="mt-2">Description</h3>
                <p>
                    Discover a more streamlined approach to tracking your
                    workout routine with this intuitive app, designed for
                    simplicity and user-friendliness. Tailor your fitness regime
                    by adding your preferred exercises into a personallized
                    workout routine. Enhance your training experience with the
                    activity lookup feature, which provides detailed information
                    about various exercises via an external API. Whether used on
                    a phone or a computer, the app accommodates both straight
                    and circuit set workouts, fitting seamlessly into your
                    fitness lifestyle. It also enables you to save and revisit
                    your routines, making it easier to track progress over time.
                    For added convenience, a built-in timer is included to help
                    manage rest periods and timed activities, ensuring your
                    workout sessions are as efficient as possible. This app is
                    the perfect companion for any type of workout routine.
                </p>
            </div>

            <div>
                <h3 className="mt-2">Tech Stack</h3>
                <p>
                    My weightlifting app is engineered with a sleek and modern
                    frontend, utilizing the combined strengths of ReactJS and
                    NextJS, and styled with the versatility of TailwindCSS. On
                    the backend, I&apos;ve implemented AWS DynamoDB for a highly
                    scalable and reliable database solution. Server-side
                    functionalities are efficiently managed through NextJS API
                    routes. To enrich user experience, I&apos;ve incorporated an API
                    from API Ninjas for comprehensive activity lookups,
                    enhancing the app&apos;s functionality. For user authentication,
                    I&apos;ve integrated NextAuth JS with the Google Provider,
                    ensuring a secure and streamlined sign-in experience.
                </p>
            </div>
            <div className="flex flex-col space-y-6 items-center sm:space-y-0 sm:items-start sm:flex-row sm:space-x-6 justify-center">
                <div>
                    <Link
                        href="https://liftingapp.vercel.app/"
                        className="bg-fuchsia-500 text-gray-950 rounded hover:bg-fuchsia-300 mt-16 px-8 py-3 flex-nowrap"
                    >
                        Workout App
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://github.com/joand003/liftingapp"
                        className="bg-fuchsia-500 text-gray-950 rounded hover:bg-fuchsia-300 mt-16 px-8 py-3"
                    >
                        Github
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Image
                    src="/workoutapp.png"
                    alt="Image of my workout app"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
}

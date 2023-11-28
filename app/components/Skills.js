"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
    const animationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 * index,
            },
        }),
    };

    const languages = ["JavaScript", "HTML", "CSS", "Python", "SQL basics"];
    const libraries = [
        "React",
        "Next.js",
        "Redux",
        "Express",
        "Node.js",
        "NextAuth.js",
        "Bootstrap",
        "Tailwind",
        "React-Spring",
        "Framer Motion",
    ];
    const databases = ["MongoDB", "DynamoDB", "SQLite", "MySQL"];
    const tools = [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Heroku",
        "Vercel",
        "Netlify",
        "Amazon Web Services",
    ];

    return (
        <div id="Skills" className="w-full">
            <div className="w-full py-5 my-12">
                <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center text-center">
                    <div className="md:w-1/3">
                        <h1 className="">Technical Skills</h1>
                        <p className="pt-4 text-center">
                            I have experience with the listed languages,
                        </p>{" "}
                        <p> libraries, databases, and tools. I am always</p>
                        <p>
                            {" "}
                            learning new things and am excited to learn more.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-1/3">
                        <h2 className="mt-5 md:pt-0">Languages</h2>
                        <ul className="flex flex-row justify-center flex-wrap gap-2 w-full">
                            {languages.map((language, index) => (
                                <motion.li
                                    className="rounded bg-white text-gray-900 px-2 py-1 my-1 w-fit flex-nowrap"
                                    variants={animationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}
                                    key={index + "language"}
                                >
                                    {language}
                                </motion.li>
                            ))}
                        </ul>
                        <h2 className="mt-5">Libraries/Frameworks</h2>
                        <ul className="flex flex-row justify-center flex-wrap gap-2 w-full">
                            {libraries.map((library, index) => (
                                <motion.li
                                    className="rounded bg-white text-gray-900 px-2 py-1 my-1 w-fit flex-nowrap"
                                    variants={animationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}
                                    key={index + "library"}
                                >
                                    {library}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col md:w-1/3">
                        <h2 className="mt-5 md:pt-0">Databases</h2>
                        <ul className="flex flex-row justify-center flex-wrap gap-2 w-full">
                            {databases.map((database, index) => (
                                <motion.li
                                    className="rounded bg-white text-gray-900 px-2 py-1 my-1 w-fit flex-nowrap"
                                    variants={animationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}
                                    key={index + "database"}
                                >
                                    {database}
                                </motion.li>
                            ))}
                        </ul>
                        <h2 className="mt-5">Tools</h2>
                        <ul className="flex flex-row justify-center flex-wrap gap-2 w-full">
                            {tools.map((tool, index) => (
                                <motion.li
                                    className="rounded bg-white text-gray-900 px-2 py-1 my-1 w-fit flex-nowrap"
                                    variants={animationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}
                                    key={index + "tool"}
                                >
                                    {tool}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

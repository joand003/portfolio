"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [projectMenuOpen, setProjectMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const path = usePathname();

    const [hidden, setHidden] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <div>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-0 z-50 flex flex-row w-full"
            >
                <div className="flex flex-row">
                    <Image
                        src="/josh1.png"
                        width={25}
                        height={25}
                        alt="Logo"
                        className="rounded-full ml-2 md:ml-4"
                    />
                    <p className="text-xl ml-2 md:ml-4">Joshua Andersland</p>
                </div>
                {/* Add hamburger menu for links below in  */}
                <div className="sm:hidden flex flex-col items-end flex-grow">
                    <div className="flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <GiHamburgerMenu size={28} />
                        </button>
                    </div>
                </div>
                <div className="hidden sm:flex flex-row justify-end flex-grow mr-2 md:mr-4 text-xl">
                    <Link
                        href={path === "/" ? "#Intro" : "/"}
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Home
                    </Link>
                    <Link
                        href={path === "/" ? "#About" : "/#About"}
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        About
                    </Link>
                    <div onMouseEnter={() => setProjectMenuOpen(true)}>
                        <Link
                            href={path === "/" ? "#Projects" : "/#Projects"}
                            className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                        >
                            Projects
                        </Link>
                        {projectMenuOpen && (
                            <div
                                className="absolute top-full bg-gray-700"
                                onMouseLeave={() => setProjectMenuOpen(false)}
                            >
                                <Link
                                    href="/workout"
                                    className="block px-4 hover:text-orange-400 h-full"
                                >
                                    Workout App
                                </Link>
                                <Link
                                    href="/diving"
                                    className="block px-4 hover:text-orange-400 h-full"
                                >
                                    Diving App
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        href={path === "/" ? "#Skills" : "/#Skills"}
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Skills
                    </Link>
                    <Link
                        href={path === "/" ? "#Contact" : "/#Contact"}
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Contact
                    </Link>
                </div>
            </motion.nav>
            <div
                className={`fixed top-8 z-50 flex flex-col items-end ${
                    menuOpen ? "flex" : "hidden"
                } sm:hidden w-full bg-gray-800`}
            >
                <Link
                    href={path === "/" ? "#Intro" : "/"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                >
                    Home
                </Link>
                <Link
                    href={path === "/" ? "#About" : "/#About"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                >
                    About
                </Link>
                <div className="flex flex-col text-right">
                <Link
                    href={path === "/" ? "#Projects" : "/#Projects"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                >
                    Projects
                </Link>
                    <div
                        className=" bg-gray-800 text-white text-right"
                    >
                        <Link
                            href="/workout"
                            className="block hover:text-orange-400 h-full"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            - Workout App
                        </Link>
                        <Link
                            href="/diving"
                            className="block hover:text-orange-400 h-full"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            - Diving App
                        </Link>
                    </div>
                </div>
                <Link
                    href={path === "/" ? "#Skills" : "/#Skills"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                >
                    Skills
                </Link>
                <Link
                    href={path === "/" ? "#Contact" : "/#Contact"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}

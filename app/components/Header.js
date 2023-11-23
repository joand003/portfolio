"use client";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    useMotionValueEvent(scrollY, 'change', (latest) => {
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
                hidden: { y: -100 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 z-50 flex flex-row w-full">
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
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <GiHamburgerMenu size={28}/>
                        </button>
                    </div>
                </div>
                <div className="hidden sm:flex flex-row justify-end flex-grow mr-2 md:mr-4 text-xl">
                    <Link
                        href="#Intro"
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Home
                    </Link>
                    <Link
                        href="#About"
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        About
                    </Link>
                    <Link
                        href="#Projects"
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#Skills"
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#Contact"
                        className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
                    >
                        Contact
                    </Link>
                </div>
        </motion.nav>
        <div className={`fixed top-8 z-50 flex flex-col items-end ${menuOpen ? "flex" : "hidden"} sm:hidden w-full bg-gray-800`}>
            <Link
                href="#Intro"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
            >
                Home
            </Link>
            <Link
                href="#About"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
            >
                About
            </Link>
            <Link
                href="#Projects"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
            >
                Projects
            </Link>
            <Link
                href="#Skills"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
            >
                Skills
            </Link>
            <Link
                href="#Contact"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:text-orange-400 h-full text-white px-2 md:px-4 font-bold`}
            >
                Contact
            </Link>
        </div>
        </div>
    );
}

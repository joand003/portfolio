"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'


export default function Header() {
    const pathName = usePathname();

    return (
        <nav className="flex flex-row justify-between text-xl">
            <p className="text-xl ml-4">Joshua Andersland</p>
            <div className="flex flex-row space-x-3 mr-4">
                <Link href="/" className={`hover:text-orange-400 h-full ${pathName === '/' ? 'text-orange-400' : 'text-white'} px-3 font-bold`}>Home</Link>
                <Link href="/about" className={`hover:text-orange-400 h-full ${pathName === '/about' ? 'text-orange-400' : 'text-white'} px-3 font-bold`}>About</Link>
                <Link href="/skills" className={`hover:text-orange-400 h-full ${pathName === '/skills' ? 'text-orange-400' : 'text-white'} px-3 font-bold`}>Skills</Link>
                <Link href="/projects" className={`hover:text-orange-400 h-full ${pathName === '/projects' ? 'text-orange-400' : 'text-white'} px-3 font-bold`}>Projects</Link>
                <Link href="/contact" className={`hover:text-orange-400 h-full ${pathName === '/contact' ? 'text-orange-400' : 'text-white'} px-3 font-bold`}>Contact</Link>
            </div>
        </nav>
    );
}

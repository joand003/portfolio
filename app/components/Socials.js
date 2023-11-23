import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Socials({direction}) {
    return (
        <div className={`flex ${direction}`}>
            <Link href="https://github.com/joand003/portfolio" className="">
                <Image
                    src="/github-mark-white.svg"
                    width={35}
                    height={35}
                    className="mb-6 mr-6 hover:bg-rose-500 hover:rounded-full"
                    alt="Github Logo"
                />
            </Link>
            <Link
                href="https://www.linkedin.com/in/joshuaandersland/"
                className=""
            >
                <Image
                    src="/linkedin.png"
                    width={35}
                    height={35}
                    className="hover:bg-rose-500 hover:rounded"
                    alt="LinkedIn Logo"
                />
            </Link>
        </div>
    );
}

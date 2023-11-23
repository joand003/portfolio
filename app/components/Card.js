"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Card({ title, image, description, alt, link }) {
    return (
        <Link href={link}>
            <motion.div 
                className="card"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                // whileTap={{ scale: 0.9 }}
            >
                <h2 className="text-center">{title}</h2>
                {/* <p className="">{description}</p> */}
                <Image src={image} width={200} height={200} alt={alt}/>
            </motion.div>
        </Link>
    );
}

"use client"
import React, { useRef} from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function About() {
    const ref = useRef();


  return (
    <div 
        id='About' className='w-full'
    >
        <div className='py-5 flex flex-col justify-center mx-24 my-12'>
        <motion.h1 initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className='text-4xl'>My Journey</motion.h1>
        <motion.p className='mt-4'><span className='font-bold'>Hello!</span> I&apos;m Joshua Andersland. For 15 incredible years, I&apos;ve been an educator, dedicated to nurturing minds and fostering creativity. This journey has been deeply fulfilling, watching ideas take shape and students thrive. However, a few years ago, I discovered a new passion that resonated just as strongly with me: <span className='font-bold'>coding</span>. Driven by an insatiable curiosity and a love for technology, I embarked on a self-taught journey into the world of web development. Today, I stand at the exciting intersection of education and technology, seeking to blend these two worlds in my new career as a <span className='font-bold'>Full Stack Developer</span>.</motion.p>
        <motion.p initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className='mt-4'>My experience as an educator has not only refined my problem-solving skills but also given me profound insights into how individuals engage with and learn from technology. This understanding was put into practice with my <Link href="https://www.anderslandscience.com/" className='font-bold underline text-fuchsia-300'>personal website</Link>, initially conceived as a tool to enhance my students&apos; learning experience. It served as a dynamic platform where interactive elements merged seamlessly with educational content, significantly contributing to their understanding of Chemistry. Although far from perfect, it was a great starting point for my coding journey.</motion.p>
        <motion.p initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className='mt-4'>This project sparked a deeper interest in the potential of web development. It was a pivotal moment when my passion for teaching organically evolved into a passion for coding. The success and impact of this website laid the foundation for my subsequent projects, including the development of innovative apps focused on <Link href="https://www.anderslandscience.com/" className='font-bold underline text-fuchsia-300'>weightlifting</Link> and <Link href="https://www.anderslandscience.com/" className='font-bold underline text-fuchsia-300'>diving</Link>. These applications are a testament to the skills I've developed over time, highlighting my journey from an educator to a proficient full-stack developer. They demonstrate my ability to construct comprehensive digital solutions that encompass both front-end and back-end development. Each app serves as a practical example of my capability to design and implement complete web solutions, showcasing my growth and versatility in the realm of full-stack development.</motion.p>
    </div>
    </div>
  )
}

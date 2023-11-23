"use client";
import React from 'react'
import { motion } from 'framer-motion'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + (i * 5);
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {delay, type: "spring", duration: 10, bounce: 0, repeat: Infinity},
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

export default function Test() {
  return (
    <motion.svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        initial="hidden"
        animate="visible"
    >
        <motion.path 
            d="M173,27 c-66,99.5 -56,49.5 -122,149 c44,87.5 54,37.5 98,125 c-29.5,75 -19.5,25 -49,100 l1,77 l-25,-26 l49,-1 l-23,27"
            fill="transparent"
            stroke="yellow"
            strokeWidth="10"
            variants={draw}
            custom={0}
        />
        
    </motion.svg>
  )
}

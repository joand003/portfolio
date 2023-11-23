"use client"
import React from 'react'
import { motion } from 'framer-motion'

// This is a test component atm to play around with framer-motion and an idea of my own

export default function Atom() {
    // const x = Math.cos(0) * 50
    // const y = Math.sin(0) * 50

  return (
    <div className='flex flex-col justify-center'>
            <div className='nucleus'></div>

            <div className='orbit orbit1'>
            <motion.div 
            className='electron' 
            animate={{
                x: [50.0, 49.38, 47.55, 44.55, 40.45, 35.36, 29.39, 22.70, 15.45, 7.82, 0.0, -7.82, -15.45, -22.70, -29.39, -35.36, -40.45, -44.55, -47.55, -49.38, -50.0, -49.38, -47.55, -44.55, -40.45, -35.36, -29.39, -22.70, -15.45, -7.82, 0.0, 7.82, 15.45, 22.70, 29.39, 35.36, 40.45, 44.55, 47.55, 49.38],
                y: [0.0, 4.69, 9.27, 13.62, 17.63, 21.21, 24.27, 26.73, 28.53, 29.63, 30.0, 29.63, 28.53, 26.73, 24.27, 21.21, 17.63, 13.62, 9.27, 4.69, 0.0, -4.69, -9.27, -13.62, -17.63, -21.21, -24.27, -26.73, -28.53, -29.63, -30.0, -29.63, -28.53, -26.73, -24.27, -21.21, -17.63, -13.62, -9.27, -4.69],
            }}
            transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
            }}
            />
            </div>
            <div className='orbit orbit2'></div>
            <div className='orbit orbit3'></div>

            {/* <motion.div 
            className='oval'
            initial={{
                scale: 0,
            }}
            animate={{
                backgroundColor: 'blue',
                scale: 1,
            }}
            transition={{
                duration: 2,
                ease: 'easeInOut',
            }}
            /> */}

            

    </div>
  )
}

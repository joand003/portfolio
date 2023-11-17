"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Atom() {
    const x = Math.cos(0) * 50
    const y = Math.sin(0) * 50

  return (
    <div className='flex flex-col justify-center'>
            <div className='nucleus'></div>

            <div className='orbit orbit1'>
            <motion.div 
            className='electron' 
            style={{
                x,
                y,
                rotate: 0,
            }}
            animate={{
                rotate: 360,
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

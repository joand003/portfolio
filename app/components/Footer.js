import React from 'react'
import Socials from './Socials'

export default function Footer() {
  return (
    <div className='pt-10 text-center'>
        <div className='flex justify-evenly'>
            <p className='ml-6'>Joshua Andersland</p>
            <p className='flex-grow'>© Copyright 2023.</p>
            <div className='mr-6'>
            <Socials className=""/>
            </div>
        </div>
    </div>
  )
}

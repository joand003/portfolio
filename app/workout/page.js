import React from 'react'
import Link from 'next/link'

export default function Workout() {
  return (
    <div className='text-white'>
         <div>
            header to go back to home
        </div>
        Workout
        <div>
            Description
        </div>
        <div>
            Tech Stack
        </div>
        <div>
            Screenshots
        </div>
        <div>
            Link to app
        </div>
        <div>
            Link to github
        </div>
        <Link href="https://liftingapp.vercel.app/">Workout App</Link>
    </div>
  )
}

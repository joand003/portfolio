import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Test from '../components/Test'

export default function Diving() {
  return (
    <div className='text-white'>
        <Header />
        <Test />
        <div>
            header to go back to home
        </div>
        Diving
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
        <Link href="https://diveapp-cce6b60b0629.herokuapp.com/">Diving App</Link>
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
       <h1 className=''>Joshua Andersland</h1>
       <p className='mt-4'>React Developer / Web app enthusiast</p>
       <Image src="/github-mark.svg" width={250} height={250} />
    </main>
  )
}

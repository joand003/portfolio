import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Joshua Andersland\'s portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-900'>
        <Header />
        {children}
      </body>
    </html>
  )
}

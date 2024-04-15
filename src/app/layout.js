import { Poppins } from 'next/font/google'
import './globals.css'
import Topbar from './Topbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Lush Pup',
  description: 'Woof woof woof '
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Topbar />
        {children}
      </body>
    </html>
  )
}

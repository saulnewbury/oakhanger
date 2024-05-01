import { Poppins } from 'next/font/google'
import { ContextProvider } from './ContextProvider'
import './globals.css'

import Topbar from './Topbar'
import Menu from './Menu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Home',
  description: 'Woof woof woof'
}

export default function RootLayout({ children }) {
  console.log(ContextProvider)
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-white`}>
        <ContextProvider>
          {children}
          <Menu />
          <Topbar />
        </ContextProvider>
      </body>
    </html>
  )
}

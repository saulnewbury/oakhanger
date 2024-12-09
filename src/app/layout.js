import { Poppins } from 'next/font/google'
import { ContextProvider } from './ContextProvider'
// import ScrollSmootherGSAP from './ScrollSmootherGSAP'
// import SmoothScroll from './lib/SmoothScroll'
import './globals.css'

import Topbar from './Topbar'
import Menu from './Menu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Home',
  description: 'Furniture makers'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <ScrollTriggerConfig /> */}
      {/* <SmoothScroll> */}
      <body className={`${poppins.className} bg-white`}>
        <ContextProvider>
          <Topbar />
          {/* <ScrollSmootherGSAP> */}
          {children}
          <Menu />
          {/* </ScrollSmootherGSAP> */}
        </ContextProvider>
      </body>
      {/* </SmoothScroll> */}
    </html>
  )
}

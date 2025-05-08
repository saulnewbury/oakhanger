'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { MenuContext } from '@/app/Context'

import logo from '@/lib/icons/logo.svg'

import './topbar.css'

import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

export default function Topbar() {
  const { isOpen, toggleMenu } = useContext(MenuContext)

  const pathname = usePathname()

  function handleClick() {
    toggleMenu()
  }

  return (
    <>
      {/* Logo */}
      <Link
        className={`link logo invert cursor-pointer mix-blend-difference fixed top-8 left-10 z-[900] ${pathname === '/' ? 'active' : ''}`}
        href='/'
      >
        <Image src={logo} alt='letters, O and M' className='' />
      </Link>

      {/* Nav */}
      <div className='nav flex flex-col text-xs uppercase font-normal leading-7 text-white fixed top-8 -mt-2 right-[22vw] mix-blend-difference z-[900]'>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
          Home
        </Link>
        <Link
          className={`link ${pathname === '#' ? 'active' : ''}`}
          href='/about'
        >
          About
        </Link>
        <Link
          className={`link ${pathname === '/manufacturing' ? 'active' : ''}`}
          href='/manufacturing'
        >
          Manufacturing
        </Link>
        {/* <Link className={`link ${pathname === '#' ? 'active' : ''}`} href='#'>
          Our products
        </Link> */}
        <Link
          className={`link ${pathname === '/contact' ? 'active' : ''}`}
          href='/contact'
        >
          Contact
        </Link>
      </div>
      {/* Menu Button */}
      <div
        className={`menu-btn fixed right-10 top-8 flex w-10 h-5 cursor-pointer mix-blend-difference z-[900] ${
          isOpen ? '' : ' open'
        }`}
        onClick={handleClick}
      >
        <div className='top absolute h-px top-4 bg-white w-full mix-blend-difference'></div>
        <div className='bottom absolute h-px bottom-4 bg-white w-full mix-blend-difference'></div>
      </div>
    </>
  )
}

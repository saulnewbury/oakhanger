'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { MenuContext } from './Context'

import logo from '../../public/logo.svg'

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
      <div className='topbar px-10 py-8 flex justify-between bg-red fixed top-0 w-full z-40 mix-blend-difference'>
        {/* Logo */}
        <div>
          <Image
            src={logo}
            alt='letters, O and M'
            className='logo invert cursor-pointer'
          />
        </div>
        <div className='basis-1/3 h-auto flex justify-between'>
          {/* Nav */}
          <div className='nav flex flex-col text-xs uppercase font-normal leading-7 text-[color:hsl(0,0%,22%)] -mt-2'>
            <Link
              className={`link ${pathname === '/' ? 'active' : ''}`}
              href='/'
            >
              Home
            </Link>
            <Link
              className={`link ${pathname === '#' ? 'active' : ''}`}
              href='#'
            >
              About
            </Link>
            <Link
              className={`link ${pathname === '#' ? 'active' : ''}`}
              href='#'
            >
              Our products
            </Link>
            <Link
              className={`link ${pathname === '#' ? 'active' : ''}`}
              href='#'
            >
              Contact
            </Link>
          </div>
          {/* Menu Button */}
          <div
            className={`menu-btn relative flex w-10 h-3 cursor-pointer mix-blend-difference ${
              isOpen ? '' : ' open'
            }`}
            onClick={handleClick}
          >
            <div className='top absolute h-px top-0 bg-white w-full mix-blend-difference'></div>
            <div className='bottom absolute h-px bottom-0 bg-white w-full mix-blend-difference'></div>
          </div>
        </div>
      </div>
    </>
  )
}

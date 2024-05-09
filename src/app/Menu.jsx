'use client'

import { useRef, useState, useEffect, useContext } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { gsap } from 'gsap'

import { MenuContext } from './Context'

import lamp from '../../public/images/nectar-lamp.jpg'

import '@/app/panels.css'

export default function Menu() {
  const { isOpen } = useContext(MenuContext)
  const [isFirst, setIsFirst] = useState(true)

  const link1 = useRef()
  const link2 = useRef()
  const link3 = useRef()
  const link4 = useRef()
  const imageContainer = useRef()
  const featured = useRef()

  const linkRefs = [link1.current, link2.current, link3.current, link4.current]

  useEffect(() => {
    setIsFirst(false)
    if (isFirst) return

    /**
     * Hide
     */

    gsap.set(featured.current, {
      objectPosition: 'center'
    })

    if (isOpen) {
      // Text
      gsap.to(linkRefs, {
        y: 100,
        stagger: -0.2,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      // Image opacity
      gsap.to(featured.current, {
        opacity: 0,
        duration: 0.1,
        delay: 1,
        ease: 'power1.out'
      })
      // Image transform
      gsap.to(featured.current, {
        xPercent: 120,
        duration: 1,
        delay: 1,
        ease: 'power1.in'
      })
    }

    /**
     * Reveal
     */

    if (!isOpen) {
      // Text
      gsap.fromTo(
        linkRefs,
        { y: 80 },
        {
          y: 0,
          stagger: 0.12,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out'
        }
      )
      // Image translate
      gsap.fromTo(
        imageContainer.current,
        { yPercent: 30 },
        {
          yPercent: 0,
          duration: 1.5,
          ease: 'power1.inOut'
        }
      )
      // Image Container scale
      gsap.fromTo(
        imageContainer.current,
        { scale: 0.8 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power1.inOut'
        }
      )
      // Image scale
      gsap.set(featured.current, { xPercent: 0 })
      gsap.fromTo(
        featured.current,
        { scale: 1.8, objectPosition: 'bottom' },
        {
          scale: 1,
          objectPosition: 'center',
          duration: 1.5,
          ease: 'power1.inOut'
        }
      )
      // Image opacity
      gsap.fromTo(
        featured.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: 0.2,
          ease: 'Power1.in'
        }
      )
    }
  }, [isOpen])

  const pathname = usePathname()

  return (
    <div className='menu h-full w-full fixed top-0 left-0 z-30'>
      {/* Bg Panels */}
      <div
        className={`menu-bg flex flex-col h-full w-full absolute top-0 left-0 ${isOpen ? '' : 'open'}`}
      >
        <div className='basis-1/3 bg-white'></div>
        <div className='basis-1/3 bg-white'></div>
        <div className='basis-1/3 bg-white'></div>
      </div>
      {/* Nav links */}
      <div className='menu-nav h-full w-full px-10 py-8 absolute top-0 left-0 flex items-center justify-between'>
        <div
          className={`${isOpen ? 'open' : ''} flex flex-col uppercase font-normal text-black -mt-2 text-[4rem] leading-snug`}
        >
          <Link
            className={`link  ${pathname === '/' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.65em]`}
            href='/'
          >
            <span ref={link1} className='inline-block'>
              Home
            </span>
          </Link>

          <Link
            className={`link ${pathname === '#' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.65em]`}
            href='#'
          >
            <span ref={link2} className='inline-block'>
              About
            </span>
          </Link>

          <Link
            className={`link ${pathname === '#' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.65em]`}
            href='#'
          >
            <span ref={link3} className='inline-block'>
              Our products
            </span>
          </Link>

          <Link
            className={`link ${pathname === '#' ? 'active' : ''} overflow-hidden leading-[.8]`}
            href='#'
          >
            <span ref={link4} className='inline-block'>
              Contact
            </span>
          </Link>
        </div>
        {/* Image of lamp */}
        <div
          ref={imageContainer}
          className='right max-w-sm aspect-[1260/1612] overflow-hidden'
        >
          <Image
            ref={featured}
            className='featured object-cover object-[center_center]'
            src={lamp}
            alt='featured lamp with base that looks like necter'
          />
        </div>
      </div>
    </div>
  )
}

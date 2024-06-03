'use client'

import { useRef, useContext } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { gsap } from 'gsap'

import { MenuContext } from './Context'

import lamp from '../../public/images/nectar-lamp.jpg'

let tl

export default function Menu() {
  const { isOpen, toggleMenu, ready } = useContext(MenuContext)
  const container = useRef()

  useGSAP(
    () => {
      tl = gsap.timeline({
        paused: true
      })

      gsap.set('.panel', { transformOrigin: 'right', opacity: 1 })

      tl.add(() => {
        if (!tl.reversed()) {
          ready(false)
        }
      })
        .fromTo(
          '.panel',
          { scaleX: 0 },
          {
            scaleX: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power1.inOut'
          }
        )
        .fromTo(
          '.featured',
          { xPercent: 120 },
          {
            xPercent: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power1.out'
          },
          '<'
        )
        // Image opacity
        .fromTo(
          '.featured',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'Power1.in'
          },
          '<'
        )
        .add(() => {
          if (tl.reversed()) {
            ready(true)
          }
        }, '<')
        .fromTo(
          '.link span',
          { y: 80 },
          {
            y: 0,
            stagger: 0.12,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out'
          },
          '<'
        )
    },
    { scope: container }
  )

  useGSAP(() => {
    // Hide
    if (isOpen) {
      gsap.set(container.current, { pointerEvents: 'none' })
      gsap.set('body', { overflow: 'auto' })
      tl.reverse()
    }

    // Reveal
    if (!isOpen) {
      gsap.set(container.current, { pointerEvents: 'auto' })
      gsap.set('body', { overflow: 'hidden' })
      tl.play()
    }
  }, [isOpen])

  const pathname = usePathname()

  function handleClick() {
    ready(false)
    toggleMenu()
  }

  return (
    <div ref={container} className='menu h-full w-full fixed top-0 left-0 z-30'>
      {/* Bg Panels */}
      <div
        className={`menu-bg flex flex-col h-full w-full absolute top-0 left-0 ${isOpen ? '' : 'open'}`}
      >
        <div className='panel basis-1/3 bg-neutral-800 opacity-0'></div>
        <div className='panel basis-1/3 bg-neutral-800 opacity-0'></div>
        <div className='panel basis-1/3 bg-neutral-800 opacity-0'></div>
      </div>
      {/* Nav links */}
      <div className='menu-nav h-full w-full px-10 py-8 absolute top-0 left-0 flex items-center justify-between'>
        <div
          className={`${isOpen ? 'open' : ''} flex flex-col uppercase font-light text-white -mt-2 text-[4rem] leading-snug`}
        >
          <Link
            className={`link  ${pathname === '/' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.5em]`}
            href='/'
            onClick={handleClick}
          >
            <span className='inline-block'>Home</span>
          </Link>

          <Link
            className={`link ${pathname === '/' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.5em]`}
            href='/about'
            onClick={handleClick}
          >
            <span className='inline-block'>About</span>
          </Link>

          {/* <Link
            className={`link ${pathname === 'about2' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.5em]`}
            href='/about2'
            onClick={handleClick}
          >
            <span className='inline-block'>About2</span>
          </Link> */}

          <Link
            className={`link ${pathname === '/' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.5em]`}
            href='/manufacturing'
            onClick={handleClick}
          >
            <span className='inline-block'>Manufacturing</span>
          </Link>

          {/* <Link
            className={`link ${pathname === '#' ? 'active' : ''} overflow-hidden leading-[.8] mb-[.5em]`}
            href='#'
          >
            <span className='inline-block'>Our products</span>
          </Link> */}

          <Link
            className={`link ${pathname === '#' ? 'active' : ''} overflow-hidden leading-[.8]`}
            href='#'
          >
            <span className='inline-block'>Contact</span>
          </Link>
        </div>
        {/* Image of lamp */}
        <div className='right max-w-sm aspect-[1260/1612] overflow-hidden'>
          <Image
            className='featured object-cover object-[center_center] hidden lg:block'
            src={lamp}
            alt='featured lamp with base that looks like necter'
          />
        </div>
      </div>
    </div>
  )
}

// strict mode is to make sure you clean up properly and to make sure you're not doing something that's irreversable. I.e. repeting it causes a problem

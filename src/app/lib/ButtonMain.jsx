'use client'

import { useRef } from 'react'

import Image from 'next/image'
import rightArrow from '../../../public/right-arrow.svg'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Button({ text }) {
  const arrow1 = useRef()
  const arrow2 = useRef()
  const button = useRef()

  useGSAP(() => {
    // gsap.set(arrow2.current, { xPercent: -100 })
  }, [])

  function handleMouseEnter() {
    gsap.to(arrow1.current, { xPercent: 100, opacity: 0, duration: 0.5 })
    gsap.to(arrow2.current, { xPercent: 100, opacity: 1, duration: 0.5 })

    gsap.to(button.current, {
      backgroundColor: '#e8e8e8',
      duration: 0.5,
      ease: 'power1.out'
    })
  }

  function handleMouseLeave() {
    gsap.to(arrow1.current, { xPercent: 0, opacity: 1, duration: 0.5 })
    gsap.to(arrow2.current, { xPercent: 0, opacity: 0, duration: 0.5 })
    gsap.to(button.current, { backgroundColor: '#D9D9D9', duration: 0.5 })
  }
  return (
    <button
      ref={button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='bg-[#D9D9D9] text-black py-[.8em] px-[2.2em] rounded-full flex items-center'
    >
      <span>{text}</span> &nbsp; &nbsp;
      <span className='text-[1.4em] relative inline-block h-full w-[10px]'>
        <Image
          className='absolute top-[50%] left-0 translate-y-[-50%]'
          ref={arrow1}
          src={rightArrow}
          alt=''
        />
        <Image
          className='absolute top-[50%] left-0 translate-y-[-50%] -translate-x-[100%] opacity-0'
          ref={arrow2}
          src={rightArrow}
          alt=''
        />
      </span>
    </button>
  )
}

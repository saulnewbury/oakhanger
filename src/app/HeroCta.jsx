'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Parallax from './lib/Parallax'

export default function HeroCta() {
  const called = useRef(false)
  const button = useRef()

  useGSAP(() => {
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: button.current,
        pin: true,
        start: 'center 65%',
        end: 'center 10%',
        scrub: 0.5
      }
    })
  })
  return (
    <div
      ref={button}
      className='absolute top-[65vh] right-[25%] translate-x-[50%] translate-y-[-50%] h-[20rem] w-[20rem] border-solid border-white rounded-full border-[2px] flex justify-center items-center text-4xl text-white'
    >
      <span>Get in touch</span>
    </div>
  )
}

'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImageReveal({ children, classes, src, alt }) {
  const image = useRef()

  useGSAP(() => {
    gsap.fromTo(
      image.current,
      { objectPosition: '50% 80%' },
      {
        scrollTrigger: {
          trigger: '.overlay',
          start: 'top 100%',
          end: 'bottom 0%',
          scrub: true
        },
        objectPosition: '50% 40%',
        duration: 1
      }
    )
    gsap.fromTo(
      '.overlay',
      { scaleX: 1 },
      {
        scrollTrigger: {
          trigger: '.bla',
          start: 'top 70%',
          markers: true
        },
        scaleX: 0,
        ease: 'power2.inOut',
        duration: 1
      }
    )
  })

  return (
    <div className='px-10 bla'>
      <div className=' h-[80vh] width-[100%] relative'>
        <Image ref={image} className={classes} src={src} alt={alt} />
        <div className='overlay bg-white absolute h-full w-full top-0 left-0 origin-right opacity-30'></div>
      </div>
    </div>
  )
}

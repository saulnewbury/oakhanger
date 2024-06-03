'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImageReveal({ children, classes, src, alt }) {
  console.log(children)
  const image = useRef()

  useGSAP(() => {
    gsap.fromTo(
      image.current,
      { objectPosition: '50% 100%' },
      {
        scrollTrigger: {
          trigger: '.overlay',
          start: 'top 100%',
          scrub: true
        },
        objectPosition: '50% 20%',
        duration: 1
      }
    )
    gsap.fromTo(
      '.overlay',
      { scaleX: 1 },
      {
        scrollTrigger: {
          trigger: '.overlay',
          start: 'top 60%'
        },
        scaleX: 0,
        ease: 'power2.inOut',
        duration: 1
      }
    )
  })

  return (
    <section className='px-10'>
      <div className=' h-[80vh] width-[100%] relative'>
        <Image ref={image} className={classes} src={src} alt={alt} />
        <div className='overlay bg-white h-full w-full absolute top-0 left-0 origin-right'></div>
      </div>
    </section>
  )
}

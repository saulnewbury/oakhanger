'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

import Image from 'next/image'

import bridge from '@/lib/images/bridge.webp'
import flowers from '@/lib/images/flowers.webp'
import rings from '@/lib/images/rings.webp'
import tableRings from '@/lib/images/table-rings-coated.webp'
import lamp from '@/lib/images/lamp.webp'
import planter from '@/lib/images/planter.webp'

export default function HorizontalImages() {
  const container = useRef()

  useGSAP(
    () => {
      gsap.set('.image-container', { xPercent: 0 })
      gsap.set('.image', { opacity: 0 })

      gsap.to('.image-container', {
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 100%',
          scrub: 0.1,
          marker: true
        },
        xPercent: -40
      })

      gsap.to('.image', {
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 110%',
          end: 'top 90%',
          scrub: 0.5,
          marker: true
        },
        stagger: 0.05,
        opacity: 1,
        ease: 'power1.inOut'
      })
    },
    { scope: container }
  )

  return (
    <div ref={container}>
      <div className='overflow-hidden w-full h-[max-content] px-10'>
        <div>
          <div className='image-container flex items-center gap-2'>
            <Image
              src={planter}
              alt='Planter'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
            <Image
              src={bridge}
              alt='Garden bridge'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
            <Image
              src={flowers}
              alt='Flower sculpture'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
            <Image
              src={rings}
              alt='Metal rings'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
            <Image
              src={tableRings}
              alt='Table with rings for legs'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
            <Image
              src={lamp}
              alt='Lamp which looks like a rose'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
            <Image
              src={planter}
              alt='Planter'
              className='image h-[28vw] w-[21vw] object-cover opacity-0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

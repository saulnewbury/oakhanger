'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

import Image from 'next/image'

import bridge from '@/app/lib/images/bridge.webp'
import flowers from '@/app/lib/images/flowers.webp'
import rings from '@/app/lib/images/rings.webp'
import tableRings from '@/app/lib/images/table-rings-coated.webp'
import lamp from '@/app/lib/images/lamp.webp'
import planter from '@/app/lib/images/planter.webp'

export default function Images({ title }) {
  const container = useRef()

  useGSAP(
    () => {
      // Animate text
      gsap.fromTo(
        '.chars',
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.chars',
            start: 'top 70%'
          },
          opacity: 1,
          stagger: 0.03
        }
      )
      // Animate images
      gsap.set('.image-container', { xPercent: 10 })
      gsap.set('.image', { opacity: 0 })

      gsap.to('.image-container', {
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 100%',
          scrub: 0.1,
          marker: true
        },
        xPercent: -10
        // ease: 'power1.inOut'
      })

      gsap.to('.image', {
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 110%',
          end: 'top 0%',
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

  function createHtml(char) {
    return !/\s/.test(char) ? { __html: char } : { __html: '&nbsp;' }
  }

  return (
    <section ref={container}>
      <h2 className='text-5xl text-center mt-[30vh] mb-[5rem] px-10'>
        {title.split('').map((char, i) => (
          <span
            className='chars opacity-0'
            key={i}
            dangerouslySetInnerHTML={createHtml(char)}
          ></span>
        ))}
      </h2>
      <div className='overflow-hidden w-full h-[max-content] px-10'>
        <div className='pb-[5rem]'>
          <div className='image-container flex items-center gap-2'>
            <Image
              src={bridge}
              alt='Garden bridge'
              className='image h-[25vw] w-[18vw] object-cover opacity-0'
            />
            <Image
              src={flowers}
              alt='Flower sculpture'
              className='image h-[25vw] w-[18vw] object-cover opacity-0'
            />
            <Image
              src={rings}
              alt='Metal rings'
              className='image h-[25vw] w-[18vw] object-cover opacity-0'
            />
            <Image
              src={tableRings}
              alt='Table with rings for legs'
              className='image h-[25vw] w-[18vw] object-cover opacity-0'
            />
            <Image
              src={lamp}
              alt='Lamp which looks like a rose'
              className='image h-[25vw] w-[18vw] object-cover opacity-0'
            />
            <Image
              src={planter}
              alt='Planter'
              className='image h-[25vw] w-[18vw] object-cover opacity-0'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

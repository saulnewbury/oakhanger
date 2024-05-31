'use client'
import { useRef, useContext, useEffect } from 'react'
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

const images = [
  { image: bridge, alt: '20 foot Iron bridge over garden pond' },
  { image: flowers, alt: 'flower sculpture' },
  { image: rings, alt: 'Metal rings' },
  { image: tableRings, alt: 'Table with rings for legs' },
  { image: lamp, alt: 'lamp' },
  { image: planter, alt: 'planter' }
]

import { MenuContext } from '../Context'

export default function HorizontalImages() {
  const container = useRef()

  const { isOpen, isReady, ready } = useContext(MenuContext)

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      ready(true)
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        ready(true)
      })
    }
  }, [])

  useGSAP(
    () => {
      if (isReady && isOpen) {
        gsap.fromTo('.image', { opacity: 0 }, { opacity: 1, duration: 1 })

        const tl = gsap.timeline()
        tl.fromTo(
          '.image-container',
          {
            xPercent: 0,
            yPercent: 10
          },
          {
            xPercent: -3,
            yPercent: 0,
            duration: 1,
            delay: 1
          }
        ).fromTo(
          '.image-container',
          { xPecent: -3 },
          {
            scrollTrigger: {
              trigger: '.image-container',
              start: 'top 100%',
              scrub: 0.1,
              marker: true
            },
            xPercent: -20
          }
        )
      }
    },
    { scope: container, dependencies: [isOpen, isReady] }
  )

  return (
    <div ref={container}>
      <div className='overflow-hidden w-full h-[max-content]'>
        <div>
          <div className='image-container flex items-center'>
            {images.map((image, idx) => (
              <Image
                key={idx}
                src={image.image}
                alt={image.alt}
                className='image h-[28vw] w-[21vw] object-cover opacity-0 px-[3px]'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

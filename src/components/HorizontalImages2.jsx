'use client'

import { useRef, useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

import Image from 'next/image'

import bridge from '@/lib/images/bridge.webp'
import flowers from '@/lib/images/flowers.webp'
import rings from '@/lib/images/rings.webp'
import tableRings from '@/lib/images/table-rings-coated.webp'
import lamp from '@/lib/images/lamp.webp'
import planter from '@/lib/images/planter.webp'

const images = [
  { image: bridge, alt: '20 foot Iron bridge over garden pond' },
  { image: flowers, alt: 'flower sculpture' },
  { image: rings, alt: 'Metal rings' },
  { image: tableRings, alt: 'Table with rings for legs' },
  { image: lamp, alt: 'lamp' },
  { image: planter, alt: 'planter' }
]

import { MenuContext } from '@/app/Context'

export default function HorizontalImages() {
  const container = useRef()
  const lenis = useLenis()
  // lenis?.stop()

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
      if (!isReady && isOpen) {
        gsap.set('.image', { opacity: 0 })
      }

      if (isReady && isOpen) {
        gsap.set('.image', { opacity: 0 })
        gsap.to('.image', { opacity: 1, delay: 0.5 })
        // gsap.fromTo('.image', { opacity: 0 }, { opacity: 1, duration: 1 })

        const tl = gsap.timeline()
        tl.fromTo(
          '.image-container ',
          { xPercent: 0, yPercent: 20 },
          {
            xPercent: -3,
            yPercent: 0,
            duration: 1,
            delay: 0.4,
            onComplete: () => {
              setUpScrollTrigger()
              // lenis?.start()
            }
          }
        )
      }
    },
    { scope: container, dependencies: [isOpen, isReady] }
  )

  function setUpScrollTrigger() {
    console.log(gsap.getProperty('.image-container', 'xPercent'))
    gsap.fromTo(
      '.image-container ',
      { xPercent: gsap.getProperty('.image-container', 'xPercent') },
      {
        scrollTrigger: {
          trigger: '.image-container',
          start: 'top 95%',
          scrub: 0.1,
          marker: true
        },
        xPercent: -20,
        duration: 1,
        ease: 'linear'
      }
    )
  }

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
                className='image lg:h-[27vw] md:h-[32vw] sm:h-[36vw] aspect-[21/28] object-cover opacity-0 px-[3px]'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useRef, useEffect, useContext } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { MenuContext } from './Context'
import { useLenis } from 'lenis/react'

export default function HeroTextReveal() {
  const { isOpen, ready, isReady } = useContext(MenuContext)

  const lenis = useLenis()
  lenis?.stop()

  console.log(lenis)

  const container = useRef()
  const q = gsap.utils.selector(container)

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
        gsap.set(q('span'), { opacity: 0 })
      }

      if (isReady && isOpen) {
        gsap.fromTo(
          q('span'),
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.06,
            onComplete: () => {
              setUpScrollTrigger()
              console.log('hhhpppp')
              lenis?.start()
            }
          }
        )
      }
    },
    { dependencies: [isOpen, isReady] }
  )

  function setUpScrollTrigger() {
    lenis?.start()
    gsap.fromTo(
      q('span'),
      { opacity: 1 },
      {
        scrollTrigger: {
          trigger: 'span',
          start: 'top 30%',
          scrub: 0.1
        },
        opacity: 0,
        stagger: 0.001
      }
    )
  }

  return (
    <div ref={container}>
      <span className='opacity-[0]'>W</span>
      <span className='opacity-[0]'>e</span>&nbsp;
      <span className='opacity-[0]'>t</span>
      <span className='opacity-[0]'>u</span>
      <span className='opacity-[0]'>r</span>
      <span className='opacity-[0]'>n</span>&nbsp;
      <span className='italic opacity-[0]'>y</span>
      <span className='italic opacity-[0]'>o</span>
      <span className='italic opacity-[0]'>u</span>
      <span className='italic opacity-[0]'>r</span>
      <br />
      <span className='opacity-[0]'>i</span>
      <span className='opacity-[0]'>d</span>
      <span className='opacity-[0]'>e</span>
      <span className='opacity-[0]'>a</span>
      <span className='opacity-[0]'>s</span>&nbsp;
      <span className='opacity-[0]'>i</span>
      <span className='opacity-[0]'>n</span>
      <span className='opacity-[0]'>t</span>
      <span className='opacity-[0]'>o</span>&nbsp;
      <span className='italic opacity-[0]'>r</span>
      <span className='italic opacity-[0]'>e</span>
      <span className='italic opacity-[0]'>a</span>
      <span className='italic opacity-[0]'>l</span>
      <span className='italic opacity-[0]'>i</span>
      <span className='italic opacity-[0]'>t</span>
      <span className='italic opacity-[0]'>y</span>
    </div>
  )
}

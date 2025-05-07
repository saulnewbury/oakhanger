'use client'

import { useRef, useEffect, useContext } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { MenuContext } from '@/app/Context'

export default function HeroTextReveal() {
  const { isOpen, ready, isReady } = useContext(MenuContext)

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
            stagger: 0.06
          }
        )
      }
    },
    { dependencies: [isOpen, isReady] }
  )

  return (
    <div ref={container}>
      <span className='opacity-[0]'>W</span>
      <span className='opacity-[0]'>e</span>&nbsp;
      <span className='opacity-[0]'>t</span>
      <span className='opacity-[0]'>u</span>
      <span className='opacity-[0]'>r</span>
      <span className='opacity-[0]'>n</span>&nbsp;
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>y</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>o</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>u</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>r</span>
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
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>r</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>e</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>a</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>l</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>i</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>t</span>
      <span className='italic opacity-[0] pr-[6px] mr-[-6px]'>y</span>
    </div>
  )
}

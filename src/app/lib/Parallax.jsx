'use client'

import { useRef, useEffect } from 'react'

import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Parallax({ children, speed = 0.4, styles = '' }) {
  const trigger = useRef()
  const target = useRef()

  useGSAP(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        scrub: 1
      },
      y: () => -ScrollTrigger.maxScroll(window) * speed,
      ease: 'none'
    })
  })

  return (
    <div ref={trigger} className={styles}>
      <div ref={target}>{children}</div>
    </div>
  )
}

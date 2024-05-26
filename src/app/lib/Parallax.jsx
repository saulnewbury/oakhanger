'use client'
import { useRef, useEffect } from 'react'

import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { useWindowSize } from '@uidotdev/usehooks'

gsap.registerPlugin(ScrollTrigger)

export default function Parallax({
  className,
  children,
  speed = 0.4,
  id = 'parallax'
}) {
  const trigger = useRef()
  const target = useRef()

  useGSAP(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        scrub: 1
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
      ease: 'none'
    })
  })

  return (
    <div ref={trigger}>
      <div ref={target}>{children}</div>
    </div>
  )
}

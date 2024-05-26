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
  speed = -2,
  id = 'parallax'
}) {
  const trigger = useRef()
  const target = useRef()
  const timeline = useRef()

  const { width: windowWidth } = useWindowSize()

  useGSAP(() => {
    const y = windowWidth * speed * 0.1

    const setY = gsap.quickSetter(target.current, 'y', 'px')
    timeline.current = gsap.timeline(
      {
        scrollTrigger: {
          id: id,
          trigger: trigger.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (e) => {
            console.log('whatsupp')
            setY(e.progress * y)
          }
        }
      },
      [id, speed, windowWidth]
    )
  })

  return (
    <div ref={trigger}>
      <div ref={target}>{children}</div>
    </div>
  )
}

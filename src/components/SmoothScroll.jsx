'use client'

import React, { useRef, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap'

export default function SmoothScroll({ children }) {
  console.log(useLenis)
  const lenis = useRef()

  useEffect(() => {
    function update(time) {
      lenis.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis
      root
      ref={lenis}
      autoRaf={false}
      options={{
        lerp: 0.1
        // wrapper: body.current,
        // wheelEventsTarget: body.current
      }}
      prevent
    >
      {children}
    </ReactLenis>
  )
}

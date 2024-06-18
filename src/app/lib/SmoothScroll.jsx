'use client'

import React, { useRef, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

export default function SmoothScroll({ children }) {
  console.log(useLenis)
  const lenis = useRef()

  useEffect(() => {
    function update(time) {
      console.log(lenis.current?.lenis)
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
      options={{ lerp: 0.1 }}
      prevent
    >
      {children}
    </ReactLenis>
  )
}

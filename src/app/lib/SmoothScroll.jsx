'use client'

import React, { useRef, useEffect } from 'react'
// import { ReactLenis } from './lenis'
import { ReactLenis } from 'lenis/react'
import { gsap } from 'gsap'

export default function SmoothScroll({ children }) {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  )
}

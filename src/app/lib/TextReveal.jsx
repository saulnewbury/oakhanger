'use client'
import { useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function TextReveal({ text, isParalax }) {
  const container = useRef()

  const start = isParalax ? '80%' : '80%'

  useGSAP(
    () => {
      gsap.fromTo(
        'span',
        { yPercent: 100, opacity: 1 },
        {
          scrollTrigger: {
            trigger: container.current,
            // start: `top ${start}`
            start: `top 80%`
          },
          yPercent: 0,
          stagger: 0.12,
          duration: 0.5
        }
      )
    },
    { scope: container }
  )

  return (
    <div ref={container}>
      {text.map((line, i) => (
        <p key={i} className='my-0 overflow-hidden'>
          <span className='max-w-[479px] inline-block opacity-0'>{line}</span>
        </p>
      ))}
    </div>
  )
}

'use client'
import { useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Reveal({ text }) {
  const container = useRef()

  useGSAP(
    () => {
      gsap.fromTo(
        'span',
        { yPercent: 100, opacity: 1 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: 'top: 80%'
          },
          yPercent: 0,
          stagger: 0.12,
          duration: 1
        }
      )
    },
    { scope: container }
  )

  return (
    <div ref={container}>
      {text.map((line, i) => (
        <p key={i} className='my-0 overflow-hidden'>
          <span className='text-[24px] max-w-[479px] inline-block opacity-0'>
            {line}
            {/* {line.map((char, i) => (
              <span key={i} className='char'>{char}</span>
            ))} */}
          </span>
        </p>
      ))}
    </div>
  )
}

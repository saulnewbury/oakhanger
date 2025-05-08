'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextRevealOpacity({
  text,
  justification = 'left',
  animSpeed = 'normal',
  classes = '',
  delay = 0
}) {
  const container = useRef()

  useGSAP(() => {
    // Use GSAP context to scope animations to this component
    gsap.context(() => {
      gsap.fromTo(
        '.chars',
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%'
          },
          opacity: 1,
          stagger: animSpeed === 'fast' ? 0.001 : 0.015,
          delay
        }
      )
    }, container) // Scope to container.current
  }, []) // Empty dependency array to run once on mount

  const textArray = text.split('')

  function createHtml(char) {
    if (char === '*') return { __html: `<br />` }
    return !/\s/.test(char) ? { __html: char } : { __html: '&nbsp;' }
  }

  return (
    <span ref={container} className={`text-${justification}`}>
      {textArray.map((char, i) => (
        <span
          className={`chars opacity-0 ${classes}`}
          dangerouslySetInnerHTML={createHtml(char)}
          key={i}
        ></span>
      ))}
    </span>
  )
}

'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextRevealOpacity({
  text,
  justification,
  classes = ''
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
          stagger: 0.03
        }
      )
    }, container) // Scope to container.current
  }, []) // Empty dependency array to run once on mount

  function createHtml(char) {
    return !/\s/.test(char) ? { __html: char } : { __html: '&nbsp;' }
  }

  return (
    <span ref={container} className={`text-${justification}`}>
      {text.split('').map((char, i) => (
        <span
          className={`chars opacity-0 ${classes}`}
          key={i}
          dangerouslySetInnerHTML={createHtml(char)}
        ></span>
      ))}
    </span>
  )
}

'use client'

import { useRef, useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { MenuContext } from '../Context'

export default function TextRevealOpacity({ text, justification }) {
  const container = useRef()

  const { ready } = useContext(MenuContext)

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      ready(true)
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        ready(true)
      })
    }
  }, [])

  useGSAP(
    () => {
      gsap.fromTo(
        '.chars',
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.chars',
            start: 'top 80%'
          },
          opacity: 1,
          stagger: 0.03
        }
      )
    },
    { scope: container }
  )

  function createHtml(char) {
    return !/\s/.test(char) ? { __html: char } : { __html: '&nbsp;' }
  }

  return (
    <span ref={container} className={`text-${justification}`}>
      {text.split('').map((char, i) => (
        <span
          className='chars opacity-0'
          key={i}
          dangerouslySetInnerHTML={createHtml(char)}
        ></span>
      ))}
    </span>
  )
}

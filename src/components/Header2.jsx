'use client'

/**
 * Using flag local storage to determine different behaviour
 * for when the page is first-loaded or refreshed and when
 * pages are navigated to virtually.
 */

import { useRef, useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/Parallax'

import { MenuContext } from '@/app/Context'

export default function Hero({ title, about, classes = '' }) {
  const intro = useRef()
  const container = useRef()
  const text = useRef()

  const { isOpen, isReady, ready } = useContext(MenuContext)

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      console.log('unload')
      ready(true)
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        ready(true)
      })
    }
  }, [])

  function createHtml(c) {
    return !/\s/.test(c) ? { __html: c } : { __html: '&nbsp;' }
  }

  useGSAP(
    () => {
      if (!isReady && isOpen) {
        gsap.set('span', { yPercent: 105 })
        gsap.set('span', { opacity: 0 })
      }

      if (isReady && isOpen) {
        gsap.set('span', { opacity: 1 })
        gsap.fromTo(
          'span',
          {
            yPercent: 105
          },
          { yPercent: 0, stagger: 0.05 }
        )
      }
    },
    { scope: container, dependencies: [isOpen, isReady] }
  )

  useGSAP(
    () => {
      if (!isReady && isOpen) {
        gsap.set('span', { yPercent: 100 })
        gsap.set('span', { opacity: 0 })
      }

      if (isReady && isOpen) {
        gsap.set('span', { opacity: 1 })
        gsap.fromTo(
          'span',
          { yPercent: 100, opacity: 1 },
          {
            yPercent: 0,
            stagger: 0.12,
            duration: 0.5
          }
        )
      }
    },
    { scope: intro, dependencies: [isOpen, isReady] }
  )

  return (
    <>
      <h1
        ref={container}
        className='text-6xl overflow-hidden leading-[.9] mb-5 uppercase;'
      >
        {title.split('').map((c, i) => (
          <span
            key={i}
            className={`inline-block opacity-0 ${classes}`}
            dangerouslySetInnerHTML={createHtml(c)}
          ></span>
        ))}
      </h1>

      <div ref={intro} className='flex text-[18px]'>
        <Parallax speed={-0.02} className='self-end'>
          <div>
            {about.map((line, i) => (
              <p key={i} className='my-0 overflow-hidden'>
                <span className='max-w-[479px] inline-block opacity-0'>
                  {line}
                </span>
              </p>
            ))}
          </div>
        </Parallax>
      </div>
    </>
  )
}

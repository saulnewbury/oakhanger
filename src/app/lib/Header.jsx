'use client'

/**
 * Using flag local storage to determine different behaviour
 * for when the page is first-loaded or refreshed and when
 * pages are navigated to virtually.
 */

import { useRef, useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Image from 'next/image'

import arrow from '../../../public/down-arrow.svg'

import { MenuContext } from '../Context'

export default function Hero({ title }) {
  const container = useRef()
  const circle = useRef()
  const downArrow = useRef()

  const { isOpen, isReady, ready } = useContext(MenuContext)

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

  function createHtml(c) {
    return !/\s/.test(c) ? { __html: c } : { __html: '&nbsp;' }
  }

  useGSAP(
    () => {
      if (!isReady && isOpen) {
        gsap.set('span', { yPercent: 105 })
        gsap.set(circle.current, { scale: 0, opacity: 0 })
        gsap.set(downArrow.current, { opacity: 0 })
      }

      if (isReady && isOpen) {
        gsap.fromTo(
          circle.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(.5)' }
        )

        gsap.fromTo(
          'span',
          {
            yPercent: 105
          },
          { yPercent: 0, stagger: 0.05 }
        )
        gsap.fromTo(
          downArrow.current,
          {
            opacity: 0
          },
          { opacity: 1, duration: 2 }
        )
      }
    },
    { scope: container, dependencies: [isOpen, isReady] }
  )

  return (
    <section ref={container} className='h-full'>
      <div
        ref={circle}
        className='h-[100vh] w-[100vw] absolute top-0 left-0 flex justify-center items-center'
      >
        <div className='border-[1px] border-neutral-400 rounded-full w-[30rem] h-[30rem]'></div>
      </div>
      <div className='flex h-full items-center justify-center text-center'>
        <h1 className='text-6xl overflow-hidden leading-[.9]'>
          {title.split('').map((c, i) => (
            <span
              key={i}
              className='inline-block'
              dangerouslySetInnerHTML={createHtml(c)}
            ></span>
          ))}
        </h1>
        <div
          ref={downArrow}
          className='downArrow absolute h-full w-full flex items-end justify-center pointer-events-none'
        >
          <Image
            className='mb-[10vh] border-neutral-400'
            src={arrow}
            alt='Down arrow'
          />
        </div>
      </div>
    </section>
  )
}

'use client'

import { useRef, useContext, useEffect } from 'react'
import Image from 'next/image'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { MenuContext } from '../Context'

import CTA from '@/app/lib/Cta.jsx'

import arrow from '../../../public/down-arrow.svg'

gsap.registerPlugin(ScrollTrigger, useGSAP)

let muted = false

export default function DesignAndRealisation() {
  const container = useRef()
  const downArrow = useRef()
  const video = useRef()
  const playPauseBtn = useRef()
  const xQTo = useRef()
  const yQTo = useRef()

  const { isOpen } = useContext(MenuContext)

  // Reset local storage item to null when refreshing page
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('aboutFirstLoadDone')
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.removeItem('aboutFirstLoadDone')
      })
    }
  }, [])

  useGSAP(
    () => {
      if (localStorage.getItem('aboutFirstLoadDone') && isOpen) {
        gsap.fromTo(
          'span',
          {
            yPercent: 105
          },
          { yPercent: 0, delay: 1.8, stagger: 0.05 }
        )
        gsap.fromTo(
          downArrow.current,
          {
            opacity: 0
          },
          { opacity: 1, duration: 2 }
        )
      }
      if (localStorage.getItem('aboutFirstLoadDone') && !isOpen) {
        console.log('yo')
        gsap.fromTo(
          'span',
          {
            yPercent: 0
          },
          { yPercent: -105, stagger: 0.05 }
        )
        gsap.fromTo(
          downArrow.current,
          {
            opacity: 1
          },
          { opacity: 0, duration: 1 }
        )
      }

      if (localStorage.getItem('aboutFirstLoadDone') === null) {
        gsap.fromTo('span', { yPercent: 105 }, { yPercent: 0, stagger: 0.05 })
        gsap.fromTo(
          downArrow.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            onComplete: () => {
              // Set aboutFirstLoadDone to true
              localStorage.setItem('aboutFirstLoadDone', 1)
            }
          }
        )
      }
    },
    { scope: container, dependencies: [isOpen] }
  )

  useGSAP(() => {
    xQTo.current = gsap.quickTo(playPauseBtn.current, 'left', {
      duration: 0.01
    })
    yQTo.current = gsap.quickTo(playPauseBtn.current, 'top', { duration: 0.01 })

    gsap.timeline({
      scrollTrigger: {
        trigger: video.current,
        start: 'top 20%',
        onEnter: () => {
          video.current.play()
        }
      }
    })
  }, [])

  return (
    <>
      <section className='flex h-full items-center justify-center text-center'>
        <section
          ref={container}
          className='flex h-full items-center justify-center'
        >
          <h1 className='text-5xl overflow-hidden leading-[.9] mb-[.65em]'>
            <span className='inline-block'>M</span>
            <span className='inline-block'>a</span>
            <span className='inline-block'>n</span>
            <span className='inline-block'>u</span>
            <span className='inline-block'>f</span>
            <span className='inline-block'>a</span>
            <span className='inline-block'>c</span>
            <span className='inline-block'>t</span>
            <span className='inline-block'>u</span>
            <span className='inline-block'>r</span>
            <span className='inline-block'>e</span>
          </h1>
          <div
            ref={downArrow}
            className='downArrow absolute h-full w-full flex items-end justify-center'
          >
            <Image className='mb-[25vh]' src={arrow} alt='Down arrow' />
          </div>
        </section>
      </section>
      <section className='h-full w-full'>
        <video
          ref={video}
          onClick={playPause}
          onMouseMove={handleMouseMove}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          width='320'
          height='240'
          muted={true}
          className='object-cover object-[center_center] h-full w-full'
          preload='auto'
        >
          <source src='/urchin-chandelier.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div
          ref={playPauseBtn}
          className='mix-blend-exclusion absolute flex justify-center items-center text-white z-[999] w-[8rem] h-[8rem] rounded-full border-white border-[1px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0'
        >
          <span>Play</span>
        </div>
      </section>
      <section className='px-10 '>
        <h2 className='text-5xl mt-20 mb-40'>Design and realisation</h2>
        <div className='flex justify-end mb-20'>
          <div>
            <h4 className='mb-5 font-normal'>We make things we believe in:</h4>
            <span className='text-[24px] max-w-[479px] inline-block'>
              From choosing materials and finishes to the design of
              manufacturing strategies, we find the solutions needed for turning
              your vision into a viable concept, and finally into a physical
              instance. We can produce one off pieces and manufacture at scale.
            </span>
          </div>
        </div>
        <div className='flex justify-end mb-20'>
          <div>
            <h4 className='mb-5 font-normal'>At the cost of manufacture:</h4>
            <span className='text-[24px] max-w-[479px] inline-block'>
              For one-off designs we can take your concept into our own product
              line, allowing us to realise your idea, at cost of manufacturing.
              This is a unique proposition that makes sense to us. It makes
              concept realisation more affordable and widely accessible, thereby
              encouraging creativity, innovation. A win-win.
            </span>
          </div>
        </div>
        <p className='text-[40px] max-w-[15em] my-24'>
          We can build, manufacture and consult on your designs, for you to sell
          as your own.
        </p>
        <div className='flex justify-end'>
          <div>
            <h4 className='mb-5 font-normal'>
              With you from beginning to end :
            </h4>
            <span className='text-[24px] max-w-[479px] inline-block'>
              We work closely with our customers, making sure we are on the same
              page at every step. Our artisans only clear items that reflect the
              highest quality of craftsmanship. However, you are the final
              arbiter for what passes as finished article.
              <br />
              <br />
              We are proud to say that so far, none of products we’ve produced
              have been returned back to us.  
            </span>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )

  function playPause() {
    video.current.muted = false

    muted = !muted

    if (muted) {
      playPauseBtn.current.innerText = 'Mute'
      gsap.to(video.current, { volume: 1 })
    } else {
      playPauseBtn.current.innerText = 'Play'
      gsap.to(video.current, { volume: 0 })
    }

    // video.current.muted = true
    console.log(video.current.paused)
  }

  function handleMouseMove(e) {
    xQTo.current(e.pageX)
    yQTo.current(e.pageY)
  }

  function handleMouseOver(e) {
    gsap.set(e.target, { cursor: 'none' })
    gsap.fromTo(playPauseBtn.current, { scale: 0 }, { scale: 1, duration: 0.2 })
    gsap.to(playPauseBtn.current, { opacity: 1, duration: 0.2 })
    xQTo.current(e.pageX)
    yQTo.current(e.pageY)
  }

  function handleMouseLeave() {
    gsap.to(playPauseBtn.current, { opacity: 0, duration: 0.2 })
    gsap.fromTo(playPauseBtn.current, { scale: 1 }, { scale: 0, duration: 0.2 })
  }
}

// static assets

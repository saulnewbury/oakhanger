'use client'

import { useRef, useEffect } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)
// gsap.registerPlugin(useGSAP)

import CTA from '@/app/lib/Cta.jsx'

export default function DesignAndRealisation() {
  const video = useRef()
  const playPauseBtn = useRef()
  const xQTo = useRef()
  const yQTo = useRef()

  useGSAP(() => {
    xQTo.current = gsap.quickTo(playPauseBtn.current, 'left', {
      duration: 0.01
    })
    yQTo.current = gsap.quickTo(playPauseBtn.current, 'top', { duration: 0.01 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video.current,
        start: 'top 20%',
        onEnter: () => {
          video.current.play()
        },
        onEnterBack: () => {
          video.current.play()
        },
        onLeave: () => {
          video.current.pause()
        },
        onLeaveBack: () => {
          video.current.pause()
        }
      }
    })
  }, [])

  function playPause() {
    if (video.current.paused) {
      video.current.play()
      playPauseBtn.current.innerText = 'Pause'
      // play
    } else {
      video.current.pause()
      playPauseBtn.current.innerText = 'Play'
    }
    console.log(video.current.paused)
  }

  function handleMouseMove(e) {
    xQTo.current(e.pageX)
    yQTo.current(e.pageY)
  }

  function handleMouseOver(e) {
    gsap.set(e.target, { cursor: 'none' })
    gsap.to(playPauseBtn.current, { opacity: 1, duration: 0.2 })
    xQTo.current(e.pageX)
    yQTo.current(e.pageY)
  }

  function handleMouseLeave() {
    gsap.to(playPauseBtn.current, { opacity: 0, duration: 0.2 })
  }

  return (
    <>
      <section className='flex h-full items-center justify-center text-center'>
        <div>
          <h1 className='text-5xl mb-2'>Manufacturing</h1>
        </div>
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
          muted='muted'
          // height='100%'
          className='object-cover object-[center_center] h-full w-full'
          // autoPlay
          // preload='auto'
        >
          <source src='/urchin-chandelier.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div
          ref={playPauseBtn}
          className='mix-blend-exclusion absolute flex justify-center items-center text-white z-[999] w-[8rem] h-[8rem] rounded-full border-white border-[.5px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0'
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
}

// static assets

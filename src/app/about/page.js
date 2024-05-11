'use client'

import { useRef, useEffect } from 'react'

import { gsap } from 'gsap'

import CTA from '@/app/lib/Cta.jsx'
export default function DesignAndRealisation() {
  const video = useRef()
  const playPauseBtn = useRef()
  const xQTo = useRef()
  const yQTo = useRef()

  useEffect(() => {
    xQTo.current = gsap.quickTo(playPauseBtn.current, 'left', { duration: 0.3 })
    yQTo.current = gsap.quickTo(playPauseBtn.current, 'top', { duration: 0.3 })
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

  let mouseInside
  function handleMouseMove(e) {
    xQTo.current(e.pageX)
    yQTo.current(e.pageY)
  }

  function handleMouseOver(e) {
    gsap.set(e.target, { cursor: 'none' })
    gsap.to(playPauseBtn.current, { opacity: 1 })
  }

  function handleMouseLeave() {
    gsap.to(playPauseBtn.current, { opacity: 0 })
  }

  return (
    <>
      <section className='flex h-full items-center justify-center'>
        <h1 className='text-5xl'>Design and realisation</h1>
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
          // height='100%'
          className='object-cover object-[center_center] h-full w-full'
          autoPlay
          // preload='auto'
        >
          <source src='/urchin-chandelier.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div
          ref={playPauseBtn}
          className='mix-blend-exclusion absolute flex justify-center items-center text-white z-[999] w-[6rem] h-[6rem] rounded-full border-white border-[.5px] -translate-x-1/2 -translate-y-1/2 pointer-events-none'
        >
          <span>Play</span>
        </div>
      </section>
      <section className='px-10 '>
        <h2 className='text-5xl mt-20 mb-40'>
          We make things we believe in. . .
        </h2>
        <p className='text-[24px] flex justify-end mb-20'>
          <span className='max-w-[479px] inline-block'>
            From choosing materials and finishes to the design of manufacturing
            strategies, we find the solutions needed for turning your vision
            into a viable concept, and finally into a physical instance. We can
            produce one off pieces and manufacture at scale.
          </span>
        </p>
        <div className='flex justify-end'>
          <div>
            <h4 className='mb-5 font-normal'>At the cost of manufacture :</h4>
            <span className='text-[24px] max-w-[479px] inline-block'>
              For one-off designs we can take your concept into our own product
              line, allowing us to realise your idea, at cost of manufacturing.
              This is a unique proposition that makes sense to us. It makes
              concept realisation more affordable and widely accessible, thereby
              encouraging creativity, innovation. A win-win.
            </span>
          </div>
        </div>
        <p className='text-[30px] max-w-[15em] font-normal my-24'>
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

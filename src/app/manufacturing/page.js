'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import CTA from '@/components/Cta.jsx'
import TextRevealOpacity from '@/components/TextRevealOpacity'
import Urchin from '@/lib/images/urchin.webp'

import Header2 from '@/components/Header2.jsx'

// import Hero from '../lib/Header'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const about = [
  'From vision to viable concept to physical',
  'instance, we help you find the soltions needed',
  'to make your vision come to life.'
]

let muted = false

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

    gsap.fromTo(video.current, { opacity: 0 }, { opacity: 1, duration: 0.05 })

    gsap.fromTo(
      video.current,
      { yPercent: 10 },
      { yPercent: 0, delay: 0.05, duration: 1.5, ease: 'power1.inOut' }
    )

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
      {/* <Hero title='Manufacture' /> */}
      <section className='px-10 h-[95vh] flex items-center'>
        <div>
          <Header2 title='We manufacture' about={about} />
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
          muted={true}
          className='object-cover object-[center_center] h-full w-full opacity-0'
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
      <section className='px-10 pt-[5rem] pb-[8rem]'>
        <h2 className='pb-[4rem] text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>
          <TextRevealOpacity
            justification='left'
            text='Design and realisation'
          />
        </h2>
        <div className='w-full flex justify-between basis-[1/2] flex-col lg:flex-row'>
          <div className='pt-[8rem]'>
            <div className='mb-20'>
              <h4 className='mb-5 font-normal text-base'>
                <TextRevealOpacity
                  justification='left'
                  text='We make things we believe in'
                />
              </h4>

              <span className='max-w-[479px] inline-block'>
                From choosing materials and finishes to the design of
                manufacturing strategies, we find the solutions needed for
                turning your vision into a viable concept, and finally into a
                physical instance. We can produce one off pieces and manufacture
                at scale.
              </span>
            </div>

            <div className='mb-20'>
              <h4 className='mb-5 font-normal text-base'>
                <TextRevealOpacity
                  justification='left'
                  text='At the cost of manufacture'
                />
              </h4>
              <span className='max-w-[479px] inline-block'>
                For one-off designs we can take your concept into our own
                product line, allowing us to realise your idea, at cost of
                manufacturing. This is a unique proposition that makes sense to
                us. It makes concept realisation more affordable and widely
                accessible, thereby encouraging creativity, innovation. A
                win-win.
              </span>
            </div>

            {/* <p className='text-[40px] max-w-[15em] my-24'>
           We can build, manufacture and consult on your designs, for you to sell
           as your own.
           </p> */}
            <div className='mb-20'>
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity
                  justification='left'
                  text='With you from beginning to end'
                />
              </h4>
              <span className='max-w-[479px] inline-block'>
                We work closely with our customers, making sure we are on the
                same page at every step. Our artisans only clear items that
                reflect the highest quality of craftsmanship. However, you are
                the final arbiter for what passes as finished article.
                {/* <br />
                  <br /> */}
                {/* We are proud to say that so far, none of products we’ve
                  produced have been returned back to us.   */}
              </span>
            </div>
          </div>
          <div className='relative basis-1/2'>
            <Image
              width='501'
              height='807'
              // className='aspect-[26/31] h-[auto] lg:w-[100%] mt-[5rem]'
              className='aspect-[26/31] h-[auto] w-full md:mt-[6rem] lg:mt-[5rem] lg:absolute lg:left-[50%] lg:-translate-x-[50%] lg:w-[650px]  lg:max-w-[unset] '
              src={Urchin}
              alt='lamp whose design is inspired by a sea urchin'
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  )

  function playPause() {
    if (video.current.muted) {
      gsap.set(video.current, { volume: 0 })
      video.current.muted = false
      gsap.to(video.current, { volume: 1, duration: 1 })
      playPauseBtn.current.innerText = 'Mute'
      return
    }

    if (muted) {
      playPauseBtn.current.innerText = 'Mute'
      gsap.to(video.current, { volume: 1, duration: 1 })
    } else {
      playPauseBtn.current.innerText = 'Play'
      gsap.to(video.current, { volume: 0, duration: 1 })
    }
    muted = !muted
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

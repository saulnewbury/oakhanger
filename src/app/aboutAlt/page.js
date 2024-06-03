'use client'

import { useRef } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import HorizontalImages from '../lib/HorizontalImages'
import Cta from '@/app/lib/Cta.jsx'
import Header from '@/app/lib/Header.jsx'

import TextReveal from '../lib/TextReveal'
import TextRevealOpacity from '../lib/TextRevealOpacity'
import Parallax from '../lib/Parallax'

import Paul from '@/app/lib/images/paul-landscape.webp'
const about = [
  'Oakhanger Metalworks is a collective of',
  'artisans manufacturing furniture and',
  'lighting based in Hampshire.'
]

export default function About() {
  const intro = useRef()
  const paul = useRef()

  useGSAP(() => {
    gsap.fromTo(
      paul.current,
      { objectPosition: 'top' },
      {
        scrollTrigger: {
          trigger: '.overlay-paul',
          start: 'top 60%',
          scrub: true
        },
        objectPosition: '0% 20%',
        duration: 1
      }
    )
    gsap.fromTo(
      '.overlay-paul',
      { scaleX: 1 },
      {
        scrollTrigger: {
          trigger: '.overlay-paul',
          start: 'top 60%'
        },
        scaleX: 0,
        ease: 'power2.inOut',
        duration: 1
      }
    )
  })

  return (
    <>
      <Header title='About us' />
      <section className='px-10 pt-[10vh] pb-[50vh]'>
        <div ref={intro} className='flex text-[24px]'>
          <Parallax speed={-0.2} className='self-end'>
            <TextReveal text={about} isParalax={true} />
          </Parallax>
        </div>
      </section>
      <section>
        <HorizontalImages />
        <h2 className='pt-[10vh] pb-[5rem] text-5xl px-10'>
          <TextRevealOpacity
            justification='center'
            text='We make things we believe in. . .'
          />
        </h2>
      </section>
      <section className='px-10 pt-[4rem]'>
        {/* <div className='self-end'> */}
        <div className='flex justify-end mb-[8rem]'>
          <div>
            <h4 className='mb-5 font-normal'>Where it all began</h4>
            <p className='inline-block max-w-[400px]'>
              We started out as apprentices at Tom, Harral Metalsmiths; a small
              company, with a 20 year history of forging and, fabricating
              thousands of lamps and, tables for industry leader, Porta, Romana.
              Thanks to Tom Harral we were, able to set up Oakhanger Metalworks
              in, 2019, as a way of exploring how we, might address the
              existential problems, facing artisan metalworkers in an,
              increasingly low cost consumer, environment.
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className='px-10'>
        <div className=' h-[80vh] width-[100%] relative'>
          {/* <Image className='pr-[3rem]' src={Paul} alt='Metal worker' /> */}
          <Image
            ref={paul}
            className='w-[100%] h-[100%] object-cover overflow-hidden object-top saturate-50'
            src={Paul}
            alt='Metal worker'
          />
          <div className='overlay-paul bg-white h-full w-full absolute top-0 left-0 origin-right'></div>
        </div>
      </section>
      <section className='px-10 flex justify-between'>
        <div className='self-end'>
          <div className='flex justify-end mb-10'>
            <div>
              <Parallax speed={0.05}>
                <h4 className='mb-5 font-normal'>Purpose</h4>
                <p className='inline-block max-w-[400px]'>
                  Our primary purpose was to preserve, the way of life of
                  artisans whilst offering, a service that was neither
                  exploitative, exclusive, nor consumptive. This meant, our
                  services had to make products that, would be affordable to
                  many and, endure for long enough to allow others, to benefit.
                  In short we needed to make, the common antiquities of the
                  future. Products that could be passed down or, sold, repaired
                  and refinished.
                </p>
              </Parallax>
            </div>
          </div>
          {/* here */}
        </div>
        <div className=' h-[max-content] w-[max-content]  relative'>
          <Image className='pr-[3rem]' src={Paul} alt='Metal worker' />
          <div className='paul bg-white h-full w-full absolute top-0 left-0 origin-right'></div>
        </div>
      </section>
      <Cta />
    </>
  )
}

// {/* <div className='flex justify-end mb-20'>
//             <div>
//               <h4 className='mb-5 font-normal'>
//                 With you from beginning to end
//               </h4>
//               <p className='inline-block max-w-[400px]'>
//                 Our primary purpose was to preserve, the way of life of artisans
//                 whilst offering, a service that was neither exploitative,
//                 exclusive, nor consumptive. This meant, our services had to make
//                 products that, would be affordable to many and, endure for long
//                 enough to allow others, to benefit. In short we needed to make,
//                 the common antiquities of the future. Products that could be
//                 passed down or, sold, repaired and refinished.
//               </p>
//             </div>
//           </div>
//           <div className='flex justify-end'>
//             <div>
//               <h4 className='mb-5 font-normal'>Our development</h4>
//               <p className='inline-block max-w-[400px]'>
//                 To achieve these aims we had to, acquire additional skills and
//                 knowledge, to communicate ideas and take, advantage of modern
//                 manufacturing, principles, so with time we became as, adept at
//                 three dimensional design, CG, rendering and CNC programming as,
//                 we are at traditional metalworking, practices like forging and
//                 fabrication, We found that by combining these old, and new
//                 disciplines that were able to, both increase and diversify our.,
//                 capabilities. More importantly, we were, able to help our
//                 customers visualise, and communicate the entirety of their,
//                 ideas; beyond whatever metalwork, requirements they may have, to
//                 other, artisans working in alternative materials, and
//                 disciplines.
//               </p>
//             </div>
//           </div> */}

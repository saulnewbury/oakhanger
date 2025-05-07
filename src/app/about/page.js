'use client'

import { useRef } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import HorizontalImages2 from '@/components/HorizontalImages2'
import TextRevealOpacity from '@/components/TextRevealOpacity'

import Cta from '@/components/Cta.jsx'
import Header2 from '@/components/Header2.jsx'

import table from '@/lib/images/table-sm-round.webp'

const about = [
  'Oakhanger Metalworks is a collective of',
  'artisans manufacturing furniture and',
  'lighting based in Hampshire.'
]

export default function About() {
  const artisan = useRef()

  useGSAP(() => {
    gsap.fromTo(
      '.artisan-container',
      { scale: 1.05, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.artisan-container',
          start: 'top 95%',
          end: 'top 85%',
          scrub: 5
        },
        scale: 1,
        opacity: 1,
        duration: 0.5
      }
    )

    gsap.fromTo(
      artisan.current,
      { scale: 1 },
      {
        scrollTrigger: {
          trigger: '.artisan-container',
          start: 'top 80%',
          scrub: true
        },
        scale: 1.13,
        duration: 1
      }
    )
  })

  return (
    <>
      <section className='px-10 h-[95vh] flex items-center'>
        <div>
          <Header2 title='About us' about={about} />
        </div>
      </section>
      <section>
        <HorizontalImages2 />
      </section>
      <section className='px-10 pt-[5rem] pb-[6rem]'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-balance'>
          <TextRevealOpacity
            justification='center'
            text='We make things we believe in. . .'
          />
        </h2>

        <div className='w-full flex justify-between basis-[1/2] flex-col lg:flex-row pt-[8rem]'>
          <div className='relative basis-1/2'>
            <Image
              width='501'
              height='807'
              className='basis-2/3 aspect-[26/31] h-[auto] w-[100%]'
              src={table}
              alt='lamp whose design is inspired by a sea urchin'
            />
          </div>
          <div className='flex flex-col flex-end'>
            <div className='mb-20'>
              {/* <Parallax speed={0.02} styles={'mb-20'}> */}
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity
                  justification='center'
                  text='Where it all began'
                />
              </h4>
              <p className='inline-block max-w-[400px]'>
                We started out as apprentices at Tom Harral Metalsmiths, a small
                company with a 20 year history of forging and fabricating
                thousands of lamps and tables, for industry leader, Porta
                Romana. Thanks to Tom Harral we were able to set up Oakhanger
                Metalworks in 2019, as a way of exploring how we might address
                the existential problems facing artisan metalworkers in an
                increasingly low cost consumer, environment.
              </p>
              {/* </Parallax> */}
            </div>
            <div className='mb-20'>
              {/* <Parallax speed={0.04} styles={'mb-20'}> */}
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity justification='center' text='Purpose' />
              </h4>
              <p className='inline-block max-w-[400px]'>
                Our primary purpose is to preserve the way of life for artisans
                whilst offering a service that is neither exploitative,
                exclusive, nor consumptive. We aim to make products that are
                affordable to many and that endure for long enough to allow
                others to benefit. To this end we make the common antiquities of
                the future. Products that could be passed down or sold, repaired
                and refinished.
              </p>
              {/* </Parallax> */}
            </div>
            <div className='mb-20'>
              {/* <Parallax speed={0.06} styles={'mb-20'}> */}
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity justification='center' text='Journey' />
              </h4>
              <p className='inline-block max-w-[400px]'>
                We endeavor to avail ourselves of the technologies and
                manufacturing principles that best support our mission.
                Currently these include three dimensional design, CG rendering
                and CNC programming. These tools alow us to help you visualise
                and communicate your ideas – beyond whatever artisanal
                requirements they may have – to other, artisans working in
                alternative materials and disciplines.
              </p>
              {/* </Parallax> */}
            </div>
          </div>
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

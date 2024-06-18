'use client'

import { useRef } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import HorizontalImages2 from '../lib/HorizontalImages2'
import Cta from '@/app/lib/Cta.jsx'
import Header2 from '@/app/lib/Header2.jsx'

import TextRevealOpacity from '../lib/TextRevealOpacity'
import Parallax from '../lib/Parallax'

import Paul from '@/app/lib/images/paul-landscape.webp'
import Urchin from '@/app/lib/images/urchin.webp'

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
        <h2 className='pt-[10vh] pb-[4rem] text-5xl px-10'>
          <TextRevealOpacity
            justification='center'
            text='We make things we believe in. . .'
          />
        </h2>
      </section>
      <section className='px-10 pt-[8rem] pb-[6rem]'>
        {/* <div className='self-end'> */}
        <div className='flex justify-end'>
          <div>
            <Parallax speed={0.04}>
              <h4 className='mb-5 font-normal'>Where it all began</h4>
              <p className='inline-block max-w-[400px]'>
                We started out as apprentices at Tom Harral Metalsmiths, a small
                company with a 20 year history of forging and fabricating
                thousands of lamps and tables, for industry leader, Porta
                Romana. Thanks to Tom Harral we were able to set up Oakhanger
                Metalworks in 2019, as a way of exploring how we might address
                the existential problems facing artisan metalworkers in an
                increasingly low cost consumer, environment.
              </p>
            </Parallax>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className='px-10'>
        <div className='artisan-container h-[85vh] width-[100%] relative overflow-hidden'>
          <Image
            ref={artisan}
            className='w-[100%] h-[100%] object-cover object-top saturate-50'
            src={Paul}
            alt='Metal worker'
          />
        </div>
      </section>

      <section className='px-10 pt-[15rem] flex justify-start'>
        <div>
          <Parallax speed={0.05} className='basis-1/3'>
            <h4 className='mb-5 font-normal'>Purpose</h4>
            <p className='inline-block max-w-[400px]'>
              Our primary purpose is to preserve the way of life for artisans
              whilst offering a service that is neither exploitative, exclusive,
              nor consumptive. We aim to make products that are affordable to
              many and that endure for long enough to allow others to benefit.
              To this end we make the common antiquities of the future. Products
              that could be passed down or sold, repaired and refinished.
            </p>
          </Parallax>
        </div>
        <Image
          className='basis-1/3'
          src={Urchin}
          alt='lamp whose design is inspired by a sea urchin'
        />
      </section>

      <section className='px-10 pt-[10rem] flex justify-end'>
        <Parallax speed={0.03}>
          <h4 className='mb-5 font-normal'>Journey</h4>
          <p className='inline-block max-w-[400px]'>
            We endeavor to avail ourselves of the technologies and manufacturing
            principles that best support our mission. Currently these include
            three dimensional design, CG rendering and CNC programming. These
            tools alow us to help you visualise and communicate your ideas –
            beyond whatever artisanal requirements they may have – to other,
            artisans working in alternative materials and disciplines.
          </p>
        </Parallax>
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

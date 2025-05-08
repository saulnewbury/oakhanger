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
import lamp from '@/lib/images/lamp-on-table.webp'

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
          {/* <TextRevealOpacity
            justification='center'
            text='We make things we believe in. . .'
            /> */}
          We make things we believe in. . .
        </h2>

        <div className='w-full flex justify-between basis-[1/2] flex-col lg:flex-row pt-[8rem]'>
          <div className='flex flex-col flex-end'>
            <div className='mb-20 mt-16'>
              {/* <Parallax speed={0.02} styles={'mb-20'}> */}
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity
                  justification='center'
                  text='Where it all began'
                />
              </h4>
              <p className='inline-block max-w-[400px]'>
                <TextRevealOpacity
                  justification='left'
                  animSpeed='fast'
                  text='We started out as apprentices at Tom Harral Metalsmiths, a small*company with a 20 year history of forging and fabricating*thousands of lamps and tables, for industry leader, Porta*Romana. Thanks to Tom Harral we were able to set up Oakhanger*Metalworks in 2019, as a way of exploring how we might address*the existential problems facing artisan metalworkers in an*increasingly low cost consumer, environment.'
                />
              </p>
              {/* </Parallax> */}
            </div>
            <div className='mb-20'>
              {/* <Parallax speed={0.04} styles={'mb-20'}> */}
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity justification='center' text='Purpose' />
              </h4>
              <p className='inline-block max-w-[400px]'>
                <TextRevealOpacity
                  justification='left'
                  animSpeed='fast'
                  text='Our primary purpose is to preserve the way of life for artisans*whilst offering a service that is neither exploitative,*exclusive, nor consumptive. We aim to make products that are*affordable to many and that endure for long enough to allow*others to benefit. To this end we make the common antiquities of*the future. Products that could be passed down or sold, repaired*and refinished.*
'
                />
              </p>
              {/* </Parallax> */}
            </div>
            <div className='mb-20'>
              {/* <Parallax speed={0.06} styles={'mb-20'}> */}
              <h4 className='mb-5 font-normal'>
                <TextRevealOpacity justification='center' text='Journey' />
              </h4>
              <p className='inline-block max-w-[400px]'>
                <TextRevealOpacity
                  justification='left'
                  animSpeed='fast'
                  text='We endeavor to avail ourselves of the technologies and*manufacturing principles that best support our mission.*Currently these include three dimensional design, CG rendering*and CNC programming. These tools alow us to help you visualise*and communicate your ideas, beyond whatever artisanal*requirements they may have, to other, artisans working in*alternative materials and disciplines.'
                />
              </p>
              {/* </Parallax> */}
            </div>
          </div>
          <div className='relative basis-1/2'>
            <Image
              width='501'
              height='807'
              className='basis-2/3 aspect-[26/31] h-[auto] w-[100%]'
              src={lamp}
              alt='lamp whose design is inspired by a sea urchin'
            />
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}

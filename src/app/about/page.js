'use client'

import { useRef } from 'react'
import Images from '../lib/Images'

import Cta from '@/app/lib/Cta.jsx'
import Header from '@/app/lib/Header.jsx'

import TextReveal from '../lib/TextReveal'
import TextRevealOpacity from '../lib/TextRevealOpacity'
import Parallax from '../lib/Parallax'

const about = [
  'Oakhanger Metalworks is a collective of',
  'artisans manufacturing furniture and',
  'lighting based in Hampshire.'
]

export default function About() {
  const intro = useRef()

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
      <section className='pb-5'>
        <h2 className='pt-[10vh] pb-[5rem] text-5xl px-10'>
          <TextRevealOpacity
            justification='center'
            text='We make things we believe in. . .'
          />
        </h2>
        <Images />
      </section>
      <section className='px-10'>
        <div className='flex justify-end mb-20'>
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
        <div className='flex justify-end mb-20'>
          <div>
            <h4 className='mb-5 font-normal'>With you from beginning to end</h4>
            <p className='inline-block max-w-[400px]'>
              Our primary purpose was to preserve, the way of life of artisans
              whilst offering, a service that was neither exploitative,
              exclusive, nor consumptive. This meant, our services had to make
              products that, would be affordable to many and, endure for long
              enough to allow others, to benefit. In short we needed to make,
              the common antiquities of the future. Products that could be
              passed down or, sold, repaired and refinished.
            </p>
          </div>
        </div>
        <div className='flex justify-end'>
          <div>
            <h4 className='mb-5 font-normal'>Our development</h4>
            <p className='inline-block max-w-[400px]'>
              To achieve these aims we had to, acquire additional skills and
              knowledge, to communicate ideas and take, advantage of modern
              manufacturing, principles, so with time we became as, adept at
              three dimensional design, CG, rendering and CNC programming as, we
              are at traditional metalworking, practices like forging and
              fabrication, We found that by combining these old, and new
              disciplines that were able to, both increase and diversify our.,
              capabilities. More importantly, we were, able to help our
              customers visualise, and communicate the entirety of their, ideas;
              beyond whatever metalwork, requirements they may have, to other,
              artisans working in alternative materials, and disciplines.
            </p>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}

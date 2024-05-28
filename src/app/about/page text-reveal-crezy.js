'use client'

import { useRef } from 'react'
import Images from '../lib/HorizontalImages'

import Cta from '@/app/lib/Cta.jsx'
import Header from '@/app/lib/Header.jsx'

import TextReveal from '../lib/TextReveal'
import TextRevealOpacity from '../lib/TextRevealOpacity'
import Parallax from '../lib/Parallax'

import Image from 'next/image'

import logo from '../../../public/logo.svg'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const about = [
  'Oakhanger Metalworks is a collective of',
  'artisans manufacturing furniture and',
  'lighting based in Hampshire.'
]

const about2 =
  'Oakhanger Metalworks is a collective of artisans manufacturing furniture and lighting based in Hampshire.'

const ourPurpose = [
  'Our primary purpose was to preserve',
  'the way of life of artisans whilst offering',
  'a service that was neither exploitative,',
  'exclusive, nor consumptive. This meant',
  'our services had to make products that',
  'would be affordable to many and',
  'endure for long enough to allow others',
  'to benefit. In short we needed to make',
  'the common antiquities of the future.',
  'Products that could be passed down or',
  'sold, repaired and refinished.'
]

const whereItAllBegan = [
  'We started out as apprentices at Tom',
  'Harral Metalsmiths; a small company',
  'with a 20 year history of forging and',
  'fabricating thousands of lamps and',
  'tables for industry leader, Porta',
  'Romana. Thanks to Tom Harral we were',
  'able to set up Oakhanger Metalworks in',
  '2019, as a way of exploring how we',
  'might address the existential problems',
  'facing artisan metalworkers in an',
  'increasingly low cost consumer',
  'environment.'
]

const development = [
  'To achieve these aims we had to',
  'acquire additional skills and knowledge',
  'to communicate ideas and take',
  'advantage of modern manufacturing',
  'principles, so with time we became as',
  'adept at three dimensional design, CG',
  'rendering and CNC programming as',
  'we are at traditional metalworking',
  'practices like forging and fabrication',
  'We found that by combining these old',
  'and new disciplines that were able to',
  'both increase and diversify our.',
  'capabilities. More importantly, we were',
  'able to help our customers visualise',
  'and communicate the entirety of their',
  'ideas; beyond whatever metalwork',
  'requirements they may have, to other',
  'artisans working in alternative materials',
  'and disciplines.'
]

export default function About() {
  const intro = useRef()
  const image = useRef()
  const mask = useRef()

  useGSAP(() => {
    // gsap.fromTo(
    //   image.current,
    //   { opacity: 0 },
    //   {
    //     scrollTrigger: {
    //       trigger: intro.current,
    //       start: 'top 80%',
    //       end: 'top 0%',
    //       scrub: 0.5
    //     },
    //     opacity: 0.1,
    //     duration: 2,
    //     ease: 'power1.in'
    //   }
    // )
  })

  return (
    <>
      {/* <div className='flex justify-center items-center fixed h-full w-full mix-blend-difference'>
        <Image
          ref={image}
          src={logo}
          alt='logo: company initials, O and M'
          className='logo invert cursor-pointer mix-blend-difference z-[1] h-[80vh] w-[auto] opacity-[0]'
        />
      </div> */}
      {/* <div ref={mask} className='mask bg-white h-full w-full fixed'></div> */}
      <Header title='About us' />
      <section className='px-10 pt-[10vh] pb-[50vh]'>
        <div ref={intro} className='flex text-[24px]'>
          {/* <TextReveal2 text={about2} fontSize='16' /> */}
          <Parallax speed={-0.2} className='self-end'>
            <TextReveal text={about} isParalax={true} />
          </Parallax>
        </div>
      </section>
      <section>
        <h2 className='pt-[10vh] pb-[5rem] text-5xl px-10'>
          <TextRevealOpacity
            justification='center'
            text='We make things we believe in. . .'
          />
        </h2>
        <Images />
      </section>
      <section className='px-10'>
        <div className='flex justify-end mb-20 pr-[200px]'>
          <div>
            <h4 className='mb-5 font-normal'>
              <TextReveal text={['Where it all began']} />
            </h4>
            <span className='text-[24px] text-base'>
              <TextReveal text={whereItAllBegan} />
            </span>
          </div>
        </div>
        <div className='flex justify-end mb-20 pr-[200px]'>
          <div>
            <h4 className='mb-5 font-normal'>
              <TextReveal text={['With you from beginning to end']} />
            </h4>
            <TextReveal text={ourPurpose} />
          </div>
        </div>
        <div className='flex justify-end pr-[200px]'>
          <div>
            <h4 className='mb-5 font-normal'>
              Our development
              {/* <TextReveal text={['Our development']} /> */}
            </h4>
            {/* <TextReveal text={development} /> */}
            <div>
              <p className='max-w-[479px] inline-block'>
                <span className='max-w-[479px] inline-block'>
                  To achieve these aims we had to, acquire additional skills and
                  knowledge, to communicate ideas and take, advantage of modern
                  manufacturing, principles, so with time we became as, adept at
                  three dimensional design, CG, rendering and CNC programming
                  as, we are at traditional metalworking, practices like forging
                  and fabrication, We found that by combining these old, and new
                  disciplines that were able to, both increase and diversify
                  our., capabilities. More importantly, we were, able to help
                  our customers visualise, and communicate the entirety of
                  their, ideas; beyond whatever metalwork, requirements they may
                  have, to other, artisans working in alternative materials, and
                  disciplines.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}

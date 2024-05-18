'use client'

import Images from '../lib/Images'

import Cta from '@/app/lib/Cta.jsx'
import Header from '@/app/lib/Header.jsx'

import Reveal from '../lib/Reveal'

const about = [
  'Oakhanger Metalworks is a collective of',
  'artisans manufacturing furniture and',
  'lighting based in Hampshire.'
]

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
  'adept at three dimensional design, cg',
  'rendering and cnc programming as we',
  'are at traditional metalworking',
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
  return (
    <>
      <Header title='About us' />
      <section className='px-10 pb-[100px]'>
        <div className='flex'>
          <Reveal text={about} />
        </div>
      </section>
      <Images title='We make things we believe in. . .' />
      <section className='px-10'>
        <div className='flex justify-end mb-20'>
          <div>
            <h4 className='mb-5 font-normal'>Where it all began</h4>
            <Reveal text={whereItAllBegan} />
          </div>
        </div>
        <div className='flex justify-end mb-20'>
          <div>
            <h4 className='mb-5 font-normal'>With you from beginning to end</h4>
            <Reveal text={ourPurpose} />
          </div>
        </div>
        <div className='flex justify-end'>
          <div>
            <h4 className='mb-5 font-normal'>Our development</h4>
            <Reveal text={development} />
            {/* <span className='text-[24px] max-w-[479px] inline-block'>
             // text here for getting line lengths
            </span> */}
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}

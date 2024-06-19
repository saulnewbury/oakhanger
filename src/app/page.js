'use client'

import Image from 'next/image'

import Cta from './lib/Cta'
import ButtonMain from '../app/lib/ButtonMain'
import HeroTextReveal from './HeroTextReveal'
import TextRevealOpacity from './lib/TextRevealOpacity'
import ImageReveal from './lib/ImageReveal'
import HeroCta from './HeroCta'

import kamIdris from '../../public/images/kam-idris-_HqHX3LBN18-unsplash.jpg'
import xie from '../../public/images/xie-yujie-nick-xe_f__fOBNs-unsplash.jpg'
import portaRomana from '@/app/lib/images/porta-romana.webp'

import welding from '../../public/images/artisans/welding.jpg'
import masonry from '../../public/images/artisans/masonry.jpg'
import glass from '../../public/images/artisans/glass-blowing.jpg'
import upholstery from '../../public/images/artisans/upholstery.jpg'
import joinery from '../../public/images/artisans/joinery.jpg'
import drop from '../../public/images/artisans/drop.jpg'
import goldLeafing from '../../public/images/artisans/gold-leaf-cat.jpg'
import design from '../../public/images/artisans/design.jpg'
import goldLeaf1 from '@/app/lib/images/gold-leaf-1.webp'
import goldLeaf2 from '@/app/lib/images/gold-leaf-2.webp'
import powerHammer from '@/app/lib/images/power-hammer.webp'
import bendingMetal from '@/app/lib/images/bending-metal.webp'

import Parallax from './lib/Parallax'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'

const images = [
  welding,
  masonry,
  goldLeaf1,
  glass,
  upholstery,
  joinery,
  bendingMetal,
  drop,
  goldLeafing,
  design,
  goldLeaf2,
  powerHammer
]

export default function Home() {
  const collaboration = useRef()
  useGSAP(() => {
    // gsap.to('body', {
    //   scrollTrigger: {
    //     trigger: collaboration.current,
    //     start: 'top 80%',
    //     end: 'top 20%',
    //     scrub: true
    //     // markers: true
    //   },
    //   background: '#d3d3d3'
    // })
  })
  return (
    <>
      {/* hero */}
      <section className='h-[130vh] w-[100vw] relative'>
        <Image
          width='868'
          height='798'
          className='object-cover object-center h-full w-full'
          src={kamIdris}
          alt='Living space showcasing high end furniture and lighting'
          priority={true}
        />
        <h1 className='absolute top-[55vh] translate-y-[-50%] text-white text-6xl font-light ml-10 leading-[1.3em]'>
          <Parallax speed={0.1}>
            <HeroTextReveal />
          </Parallax>
        </h1>
        <div className='absolute top-0 left-0 bg-black'></div>
        {/* <HeroCta /> */}
      </section>
      {/* Services */}
      <section className='services w-[100vw] mt-[80px]'>
        <div className='px-10'>
          {/* <h2 className='text-6xl font-light mt-[4rem] mb-[200px]'>
            <TextRevealOpacity
              justification='center'
              text='From concept to creation. . . '
            />
          </h2> */}
        </div>
        <div className='flex justify-between'>
          <div className='text-right w-full flex justify-center items-center'>
            <Parallax speed='.05'>
              <div>
                <h3 className='text-3xl font-light mb-5 max-w-[350px]'>
                  Design and realisation
                </h3>
                <p className='max-w-[350px] mb-[60px]'>
                  We work with interior designers and creators to help them
                  conceptualise and realise their projects.
                </p>
                <div className='flex justify-end'>
                  <ButtonMain text='Read more' />
                </div>
              </div>
            </Parallax>
          </div>
          <div className='aspect-[1260/1612] overflow-hidden basis-[80%]'>
            <ImageReveal
              src={xie}
              // src={portaRomana}
              alt='xie lamp'
              classes={'object-cover object-[center_center] h-full'}
            />
          </div>
        </div>
      </section>
      {/* collaborators */}
      <section ref={collaboration}>
        <div className='px-10'>
          <h2 className='text-6xl font-light'>
            <TextRevealOpacity justification='left' text='Our collaborators' />
          </h2>
          <p className='text-right mb-20'>
            <span className='w-[350px] inline-block'>
              With our team of collaborators we are able to complete products
              require a variety of materials and artisan disciplines.
            </span>
          </p>
          <div className='grid grid-cols-6 grid-rows-2 gap-[.5vw] h-[max-content]'>
            {images.map((img, idx) => (
              <Image
                key={idx}
                className='object-cover object-center w-full h-full'
                src={img}
                alt='Living space showcasing high end furniture and lighting'
              />
            ))}
          </div>
          <div className='text-right italic mt-5 mr-2'>
            <span>et al.</span>
          </div>
        </div>
      </section>
      {/* CTA */}
      <Cta />
    </>
  )
}

//  <div className={`h-full bg-black bg-[url('/images/kam-idris-_HqHX3LBN18-unsplash.jpg')] bg-cover bg-center`}></div>

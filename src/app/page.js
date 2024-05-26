'use client'

import { useRef, useEffect, useContext } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Image from 'next/image'

import { MenuContext } from './Context'

import Cta from './lib/Cta'
import TextRevealOpacity from './lib/TextRevealOpacity'

import kamIdris from '../../public/images/kam-idris-_HqHX3LBN18-unsplash.jpg'
import xie from '../../public/images/xie-yujie-nick-xe_f__fOBNs-unsplash.jpg'

import welding from '../../public/images/artisans/welding.jpg'
import masonry from '../../public/images/artisans/masonry.jpg'
import glass from '../../public/images/artisans/glass-blowing.jpg'
import upholstery from '../../public/images/artisans/upholstery.jpg'
import joinery from '../../public/images/artisans/joinery.jpg'
import drop from '../../public/images/artisans/drop.jpg'
import goldLeafing from '../../public/images/artisans/gold-leaf-cat.jpg'
import design from '../../public/images/artisans/design.jpg'

const images = [
  welding,
  masonry,
  glass,
  upholstery,
  joinery,
  drop,
  goldLeafing,
  design
]

export default function Home() {
  const container = useRef()

  const { isOpen, ready, isReady } = useContext(MenuContext)

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      ready(true)
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        ready(true)
      })
    }
  }, [])

  useGSAP(
    () => {
      if (!isReady && isOpen) {
        gsap.set('h1 span', { opacity: 0 })
      }

      if (isReady && isOpen) {
        gsap.fromTo('h1 span', { opacity: 0 }, { opacity: 1, stagger: 0.06 })
      }
    },
    { scope: container, dependencies: [isOpen, isReady] }
  )
  return (
    <>
      {/* hero */}
      <section ref={container} className='h-full relative'>
        <Image
          className='object-cover object-center h-full brightness-100'
          src={kamIdris}
          alt='Living space showcasing high end furniture and lighting'
          priority={true}
        />
        <h1 className='absolute top-[55vh] text-white text-6xl ml-10 leading-[1.3em]'>
          <span>W</span>
          <span>e</span>&nbsp;
          <span>t</span>
          <span>u</span>
          <span>r</span>
          <span>n</span>&nbsp;
          <span className='italic'>y</span>
          <span className='italic'>o</span>
          <span className='italic'>u</span>
          <span className='italic'>r</span>
          <br />
          <span>i</span>
          <span>d</span>
          <span>e</span>
          <span>a</span>
          <span>s</span>&nbsp;
          <span>i</span>
          <span>n</span>
          <span>t</span>
          <span>o</span>&nbsp;
          <span className='italic'>r</span>
          <span className='italic'>e</span>
          <span className='italic'>a</span>
          <span className='italic'>l</span>
          <span className='italic'>i</span>
          <span className='italic'>t</span>
          <span className='italic'>y</span>
        </h1>
      </section>
      {/* Services */}
      <section className='services h-[max-content] w-[100vw] '>
        <div className='px-10'>
          <h2 className='text-5xl font-light mt-[10rem] mb-[200px] text-center'>
            <TextRevealOpacity
              justification='center'
              text='With you from concept to creation'
            />
          </h2>
        </div>
        <div className='flex justify-between'>
          <div className='text-right w-full flex justify-center items-center'>
            <div>
              <h3 className='text-3xl font-light mb-5 max-w-[350px]'>
                Design and realisation
              </h3>
              <p className='max-w-[350px]'>
                We work with interior designers and creators to help them
                conceptualise and realise their projects.
              </p>
            </div>
          </div>
          <div className='aspect-[1260/1612] overflow-hidden basis-[80%]'>
            <Image
              className='object-cover object-[center_center] h-full brightness-90'
              src={xie}
              alt='xie lamp'
            />
          </div>
        </div>
      </section>
      {/* collaborators */}
      <section>
        <div className='px-10'>
          <h2 className='text-5xl font-light my-40'>Collaboration</h2>
          <p className='text-right mb-20'>
            <span className='w-[350px] inline-block'>
              With our team of collaborators we are able to complete products
              require a variety of materials and artisan disciplines.
            </span>
          </p>
          <div className='grid grid-cols-4 grid-rows-2 gap-[1vw] h-[max-content]'>
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

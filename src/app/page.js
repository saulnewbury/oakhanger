'use client'

import Image from 'next/image'

import Cta from './lib/Cta'
import HeroTextReveal from './HeroTextReveal'
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
  return (
    <>
      {/* hero */}
      <section className='h-[100vh] w-[100vw] relative'>
        <Image
          width='868'
          height='798'
          className='object-cover object-center h-full w-full'
          src={kamIdris}
          alt='Living space showcasing high end furniture and lighting'
          priority={true}
        />
        <h1 className='absolute top-[55vh] text-white text-6xl ml-10 leading-[1.3em]'>
          <HeroTextReveal />
        </h1>
      </section>
      {/* Services */}
      <section className='services w-[100vw]'>
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

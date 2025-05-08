'use client'

import Image from 'next/image'
import Link from 'next/link'

import Cta from '@/components/Cta'
import ButtonMain from '@/components/ButtonMain'
import TextRevealOpacity from '@/components/TextRevealOpacity'
import ImageReveal from '@/components/ImageReveal'
import HeroTextReveal from '@/components/HeroTextReveal'

import xie from '@/lib/images/xie-yujie-nick-xe_f__fOBNs-unsplash.jpg'
import scene from '@/lib/images/hero/scene-3.webp'

import floorLamp from '@/lib/images/floor-lamp.webp'

import welding from '@/lib/images/artisans/welding.jpg'
import masonry from '@/lib/images/artisans/masonry.jpg'
import glass from '@/lib/images/artisans/glass-blowing.jpg'
import upholstery from '@/lib/images/artisans/upholstery.jpg'
import joinery from '@/lib/images/artisans/joinery.jpg'
import drop from '@/lib/images/artisans/drop.jpg'
import goldLeafing from '@/lib/images/artisans/gold-leaf-cat.jpg'
import design from '@/lib/images/artisans/design.jpg'
import goldLeaf1 from '@/lib/images/gold-leaf-1.webp'
import goldLeaf2 from '@/lib/images/gold-leaf-2.webp'
import powerHammer from '@/lib/images/power-hammer.webp'
import bendingMetal from '@/lib/images/bending-metal.webp'

import Parallax from '@/components/Parallax'

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
  return (
    <>
      {/* hero */}
      <section className='h-[130vh] w-[100vw] relative'>
        <Image
          className='object-cover object-center h-full w-full'
          src={scene}
          alt='Living space showcasing high end furniture and lighting'
          priority={true}
        />
        <h1 className='absolute top-[55vh] translate-y-[-50%] text-white text-7xl font-light ml-10 leading-[1.3em]'>
          <Parallax speed={-0.1}>
            <HeroTextReveal />
          </Parallax>
        </h1>
        <div className='absolute top-0 left-0 bg-black'></div>
      </section>
      {/* Services */}
      <section className='services w-[100vw] mt-[80px]'>
        <div className='px-10'>
          <h2 className='text-6xl font-light mt-[4rem] mb-[200px] '>
            {/* <TextRevealOpacity
              justification='center'
              text='From concept to creation. . . '
            /> */}
            From concept to creation. . .
          </h2>
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
                  <Link href='/manufacturing'>
                    <ButtonMain text='Read more' />
                  </Link>
                </div>
              </div>
            </Parallax>
          </div>
          <div className='aspect-[1260/1612] overflow-hidden basis-[80%]'>
            <ImageReveal
              src={floorLamp}
              alt='floor lamp'
              classes={'object-cover object-[center_center] h-full block'}
            />
          </div>
        </div>
      </section>
      {/* collaborators */}
      <section>
        <div className='px-10'>
          <h2 className='text-6xl font-light'>
            {/* <TextRevealOpacity justification='left' text='Our collaborators' /> */}
            Our collaborators
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

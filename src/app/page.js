import Image from 'next/image'

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
      <section className='h-full'>
        <Image
          className='object-cover object-center h-full brightness-90'
          src={kamIdris}
          alt='Living space showcasing high end furniture and lighting'
          priority={true}
        />
      </section>
      {/* Services */}
      <section className='services h-[max-content] w-[100vw] '>
        <div className='px-10'>
          <h2 className='text-5xl font-light mt-20 mb-[100px]'>
            With you from concept to creation. . .
          </h2>
          <p className='text-right mb-20'>
            We turn <span className='italic'>your</span> designs into{' '}
            <span>reality.</span>
          </p>
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
      <section className='text-center mt-[10em]'>
        <h3 className='text-4xl mb-[60px]'>
          Have an idea you&apos;d like to discuss?
        </h3>
        <div className='flex justify-center'>
          <button className=' bg-[#D9D9D9] text-black py-[.8em] px-[2.2em] rounded-full flex items-center'>
            <span>Get in touch</span> &nbsp; &nbsp;
            <span className='text-[1.4em]'>&gt;</span>
          </button>
        </div>
      </section>
      <section className='h-[1000px]'></section>
    </>
  )
}

//  <div className={`h-full bg-black bg-[url('/images/kam-idris-_HqHX3LBN18-unsplash.jpg')] bg-cover bg-center`}></div>

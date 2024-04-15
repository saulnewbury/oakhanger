import Image from 'next/image'
import kamIdris from '../../public/images/kam-idris-_HqHX3LBN18-unsplash.jpg'
import xie from '../../public/images/xie-yujie-nick-xe_f__fOBNs-unsplash.jpg'

export default function Home() {
  return (
    <>
      <section className='h-full'>
        <Image
          className='object-cover object-center h-full brightness-90'
          src={kamIdris}
          alt='Living space showcasing high end furniture and lighting'
          priority={true}
        />
      </section>
      <section className='services h-[100vh] w-[100vw] '>
        <div className='px-10'>
          <h2 className='text-5xl font-light my-40'>
            With you from concept to creation. . .
          </h2>
          <p className='text-right mb-20'>
            We turn <span className='italic'>your</span> designs into{' '}
            <span>reality</span>
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
    </>
  )
}

//  <div className={`h-full bg-black bg-[url('/images/kam-idris-_HqHX3LBN18-unsplash.jpg')] bg-cover bg-center`}></div>

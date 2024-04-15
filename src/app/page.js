import Image from 'next/image'
import kamIdris from '../../public/images/kam-idris-_HqHX3LBN18-unsplash.jpg'

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
      <section className='services'></section>
    </>
  )
}

//  <div className={`h-full bg-black bg-[url('/images/kam-idris-_HqHX3LBN18-unsplash.jpg')] bg-cover bg-center`}></div>

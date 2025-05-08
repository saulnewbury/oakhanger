'use client'

import Link from 'next/link'
import ButtonMain from './ButtonMain'

export default function Cta() {
  return (
    <section className='text-center mt-[10em] pb-[10em]'>
      <h3 className='text-4xl mb-[60px]'>
        Have an idea you&apos;d like to discuss?
      </h3>
      <div className='flex justify-center'>
        <Link href='/contact'>
          <ButtonMain text='Get in touch' />
        </Link>
      </div>
    </section>
  )
}

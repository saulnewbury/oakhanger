import Link from 'next/link'
import Header2 from '@/components/Header2'
import TextRevealOpacity from '@/components/TextRevealOpacity'

const about = ['We work closely with you to bring your vision to life.']

export default function page() {
  return (
    <section className='px-10 h-[95vh] flex items-center'>
      <div className='w-full'>
        <div className=''>
          <Header2 title='Get in touch' about={about} />
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='mt-[6rem]'>
            <span className='font-semi-bold'>
              <TextRevealOpacity text='Oakhanger Metalworks*Unit 6*Hartley Wood Farm*Hampshire*Oakhanger*GU37 9JW' />
            </span>
          </div>
          <div className='self-end'>
            <TextRevealOpacity
              text='01420 478206'
              justification='right'
              delay={1}
            />
            <br />
            <Link href='mailto:hello@oakhangermetalworks.com'>
              <TextRevealOpacity
                text='hello@oakhangermetalworks.com'
                justification='right'
                delay={1.2}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

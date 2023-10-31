import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex flex-col w-full p-4'>
      <div className='flex flex-col p-2'>
        <p className='font-medium text-xl '>Join our community </p>
        <p className='font-medium text-lg'>
          30-day, hassle-free money back guarantee
        </p>
        <p className='text-sm'>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className='flex flex-col p-2'>
        <p className='font-medium text-xl '>Monthly Subscription </p>
        <p className='font-medium text-3xl '>
          $29 <span className='font-normal text-sm'>per month</span>
        </p>
        <p className='font-medium text-lg'>
          Full access for less than $1 a day
        </p>
        <button className='w-full p-2'>Sign Up</button>
      </div>
      <div className='flex flex-col p-2'>
        <p className='font-medium text-xl '>Why Us</p>
        <p className='text-sm'>
          Tutorials by industry experts Peer & expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </div>
    </div>
  )
}

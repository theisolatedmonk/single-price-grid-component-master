import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex flex-col w-full px-4 justify-center items-center min-h-screen bg-GrayishBlue'>
      <div className='flex flex-col p-6 gap-5 bg-white rounded-t-md sm:w-[50%]'>
        <p className='font-medium text-xl text-Cyan'>Join our community </p>
        <p className='font-medium text-sm text-BrightYellow'>
          30-day, hassle-free money back guarantee
        </p>
        <p className='text-sm text-GrayishBlue'>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row sm:w-[50%]  '>
        <div className='flex flex-col  bg-Cyan text-white sm:w-[50%] p-5 gap-4   sm:rounded-bl-md'>
          <p className='font-medium text-lg '>Monthly Subscription </p>
          <p className='font-medium text-2xl '>
            $29{' '}
            <span className='font-normal text-sm text-GrayishBlue'>
              per month
            </span>
          </p>
          <p className='font-medium text-sm  text-LightGray'>
            Full access for less than $1 a day
          </p>
          <button className='w-full p-3 mt-2 shadow-lg bg-BrightYellow rounded-md text-sm'>
            Sign Up
          </button>
        </div>
        <div className='flex flex-col  sm:w-[50%] bg-Cyan bg-opacity-50 text-white p-6 justify-start rounded-b-md sm:rounded-b-none sm:rounded-br-md'>
          <p className='font-medium text-lg gap-4  '>Why Us</p>
          <p className='text-sm text-LightGray text-left'>
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </div>
  )
}

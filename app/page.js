import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex flex-col w-full p-8  justify-center items-center min-h-screen bg-GrayishBlue font-Karla text-lg'>
      <div className='flex flex-col p-7 gap-5 bg-white rounded-t-md sm:w-[65%] '>
        <p className=' text-xl text-Cyan font-bold'>Join our community </p>
        <p className='font-semibold  text-BrightYellow '>
          30-day, hassle-free money back guarantee
        </p>
        <p className=' text-GrayishBlue'>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row sm:w-[65%]  '>
        <div className='flex flex-col  bg-Cyan text-white sm:w-[50%] p-7 gap-4   sm:rounded-bl-md'>
          <p className=' text-lg font-bold'>Monthly Subscription </p>
          <p className=' text-3xl flex gap-2 items-center font-bold'>
            $29{' '}
            <span className='font-normal text-lg  text-LightGray text-opacity-50'>
              per month
            </span>
          </p>
          <p className='   text-LightGray'>
            Full access for less than $1 a day
          </p>
          <button className='w-full p-3 mt-2 shadow-lg bg-BrightYellow rounded-md  font-semibold'>
            Sign Up
          </button>
        </div>
        <div className='flex flex-col  sm:w-[50%] bg-Cyan bg-opacity-50 text-white p-7 justify-start rounded-b-md sm:rounded-b-none sm:rounded-br-md gap-4'>
          <p className=' text-lg   font-bold'>Why Us</p>
          <p className='text-lg text-LightGray text-left sm:pr-[47px] pr-[76px]'>
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </div>
  )
}

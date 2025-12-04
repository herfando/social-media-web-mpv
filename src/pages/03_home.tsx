import { Heart, Send, Plus } from 'lucide-react';

export default function Home() {
  return (
    <section className='mx-auto mt-16 flex h-auto max-w-600 items-center justify-center px-16 md:mt-40'>
      {/* Card */}
      <div className='h-858 w-full space-y-15'>
        {/*1.  Profile picture */}
        <div className='flex items-center'>
          {/* picture */}
          <div className='mr-16 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
            <span className='text-3xl text-gray-400'>👤</span>
          </div>
          {/* Name and status online */}
          <div>
            <p className='md:text-md text-sm font-bold'>Johndoe</p>
            <p className='font-regular md:text-md text-xs text-[#A4A7AE]'>
              1 Minutes Ago
            </p>
          </div>
        </div>
        {/* 2. Big picture */}
        <div>
          {/* picture */}
          <img src='/images/01_dummy1.png' alt='dummy picture' />
        </div>
        {/* 3. Like , comment , share icons */}
        <div className='flex justify-between'>
          {/* left */}
          <div className='flex space-x-16'>
            {/* Hert */}
            <div className='items-center'>
              <Heart className='mr-6 inline-block h-24 w-24 border-none fill-[#B41759] text-[#B41759] hover:cursor-pointer' />
              <span>20</span>
            </div>
            {/* Message */}
            <div>
              <img
                src='/icons/02_message.svg'
                alt='icon message'
                className='mr-6 inline-block h-24 w-24 hover:cursor-pointer'
              />
              <span>20</span>
            </div>
            {/* Send */}
            <div>
              <Send className='mr-6 inline-block h-24 w-24 hover:cursor-pointer' />
              <span>20</span>
            </div>
          </div>
          {/* right */}
          {/* Archive */}
          <div>
            <img src='/icons/03_archive.svg' alt='icon archieve' />
          </div>
        </div>
        {/* 3.Description and show more */}
        {/* Name */}
        <div>Johndoe</div>
        {/* Description */}
        <div>
          Creating unforgettable moments with my favorite person! 📸✨ Let's
          cherish every second together! ...
        </div>
        {/* Show more */}
        <div className='text-[#7F51F9] hover:cursor-pointer'>Show more</div>
        {/* underline */}
        <div className='mt-24 mb-24 w-full border border-b border-[#181D27]'></div>
      </div>
      {/* 4.Button */}
      <div className='absolute right-1/2 bottom-16 flex h-80 w-360 translate-1/2 items-center justify-between rounded-full border border-[#181D27] bg-[#0A0D12] px-17'>
        {/* home */}
        <div className='flex flex-col items-center justify-center gap-2 md:gap-4'>
          <img
            src='/icons/03_home.svg'
            alt='icon home'
            className='h-20 w-20 md:h-24 md:w-24'
          />
          <span className='md:text-md text-xs font-bold text-[#7F51F9]'>
            Home
          </span>
        </div>
        {/* add */}
        <div className='flex h-48 w-48 items-center justify-center rounded-full bg-[#6936F2]'>
          <Plus className='h-24 w-24 text-[#FDFDFD] hover:cursor-pointer' />
        </div>
        {/* profile */}
        <div className='flex flex-col items-center justify-center gap-2 md:gap-4'>
          <img src='/icons/04_profile.svg' alt='icon profile' />
          <span className='md:text-md font-regular text-xs'>Profile</span>{' '}
        </div>
      </div>
    </section>
  );
}

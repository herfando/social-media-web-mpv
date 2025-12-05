import Button from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function MyProfile() {
  return (
    <section className='mx-auto mt-16 h-auto w-844 pr-16 pl-16 md:mt-40'>
      <div className='space-y-16'>
        {/* 1. profile and edit profile */}
        <div className='flex justify-between'>
          {/*  Profile picture */}
          <div className='flex items-center space-x-13'>
            {/* picture */}
            <div className='mr-16 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
              <span className='text-3xl text-gray-400'>👤</span>
            </div>
            {/* Name and status online */}
            <div className='items-center space-y-2'>
              <p className='text-sm font-bold'>Johndoe</p>
              <p className='font-regular text-xs text-[#A4A7AE]'>
                1 Minutes Ago
              </p>
            </div>
          </div>
          {/* button edit profile & send */}
          <div className='flex items-center space-x-12'>
            {/* Edit profile */}
            <div>
              <Button className='md:text-md h-48 w-130 border border-[#181D27] text-sm font-bold hover:cursor-pointer'>
                Edit Profile
              </Button>
            </div>
            {/* Send */}
            <div className='flex h-48 w-48 items-center justify-center rounded-full border border-[#181D27]'>
              <Send className='inline-block h-24 w-24 hover:cursor-pointer' />
            </div>
          </div>
        </div>
        {/* 2. Bio */}
        <p>
          Creating unforgettable moments with my favorite person! 📸✨ Let's
          cherish every second together!
        </p>
        {/* 3.Social stats */}
        <div className='flex space-x-24'>
          {/* Post */}
          <div className='flex h-66 w-167 items-center space-x-24'>
            <div className='flex h-66 w-167 flex-col items-center justify-center'>
              <p className='text-lg font-bold md:text-xl'>50</p>
              <p className='font-regular md:text-md text-xs text-[#A4A7AE]'>
                Post
              </p>
            </div>
            {/* sideline */}
            <div className='mt-24 mb-24 h-full border border-r border-[#181D27]'></div>
          </div>
          {/* Followers */}
          <div className='flex h-66 w-167 items-center space-x-24'>
            <div className='flex h-66 w-167 flex-col items-center justify-center'>
              <p className='text-lg font-bold md:text-xl'>100</p>
              <p className='font-regular md:text-md text-xs text-[#A4A7AE]'>
                Followers
              </p>
            </div>
            {/* sideline */}
            <div className='mt-24 mb-24 h-full border border-r border-[#181D27]'></div>
          </div>
          {/* Following */}
          <div className='flex h-66 w-167 items-center space-x-24'>
            <div className='flex h-66 w-167 flex-col items-center justify-center'>
              <p className='text-lg font-bold md:text-xl'>43</p>
              <p className='font-regular md:text-md text-xs text-[#A4A7AE]'>
                Following
              </p>
            </div>
            {/* sideline */}
            <div className='mt-24 mb-24 h-full border border-r border-[#181D27]'></div>
          </div>
          {/* Likes */}
          <div className='flex h-66 w-167 items-center space-x-24'>
            <div className='flex h-66 w-167 flex-col items-center justify-center'>
              <p className='text-lg font-bold md:text-xl'>567</p>
              <p className='font-regular md:text-md text-xs text-[#A4A7AE]'>
                Likes
              </p>
            </div>
            {/* sideline */}
            <div className='mt-24 mb-24 h-full border border-r border-[#181D27]'></div>
          </div>
        </div>
        {/* 4. Gallery & Saved */}
        <div className='flex'>
          {/* Gallery */}
          <div className='flex h-48 w-406 items-center justify-center space-x-12'>
            <img src='/icons/06_grid.svg' alt='icon grid' />
            <span>Gallery</span>
          </div>
          {/* Saved */}
          <div className='flex h-48 w-406 items-center justify-center space-x-12'>
            <img src='/icons/07_saved.svg' alt='icon saved' />
            <span>Saved</span>
          </div>
        </div>
        {/* 5. Content & Video */}
        <div>
          <div className='flex h-268 w-268 flex-wrap'>
            <img src='/images/01_dummy1.png' alt='img dummy' />
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

export default function UpdateProfile() {
  return (
    <section className='mx-auto mt-16 max-w-832 pr-16 pl-16 md:mt-40'>
      {/* Add Post */}
      <div className='flex space-y-32 space-x-12'>
        <ArrowLeft className='cursor-pointer' />
        <span className='text-xs-lh font-bold'>Edit Profile</span>
      </div>
      <div className='flex space-x-48'>
        {/* 1. Profile and picture */}
        <div className='flex h-194 w-160 flex-col items-center justify-center space-y-16'>
          {/* picture */}
          <div className='flex h-130 w-130 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
            <span className='text-3xl text-gray-400'>👤</span>
          </div>{' '}
          <span className='self-center'>Change Photo</span>
        </div>
        {/* 2.Form */}
        <div>
          {/* Card */}
          <div className='h-611 w-592 space-y-24'>
            {/* 1. Name */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Name</h3>
              <Input
                placeholder='John Doe'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* 2. Username */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Username</h3>
              <Input
                placeholder='johndoe'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* 3. Email */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Email</h3>
              <Input
                placeholder='johndoe@email.com'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* 4. Number Phone */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Number Phone</h3>
              <Input
                placeholder='081234567890'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* 5. Bio */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Bio</h3>
              <Input
                placeholder="Creating unforgettable moments with my favorite person! 📸✨ Let's cherish every second together!"
                className='text-md h-101 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* Share Button */}
            <Button className='text-md mt-16 h-48 w-full bg-[#6936F2] font-bold hover:cursor-pointer'>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

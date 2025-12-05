import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, CloudUpload } from 'lucide-react';

export default function AddPost() {
  return (
    <section className='mx-auto mt-16 max-w-484 pr-16 pl-16 md:mt-40'>
      <div>
        {/* Add Post */}
        <div className='flex space-x-12'>
          <ArrowLeft className='cursor-pointer' />
          <span className='text-xs-lh'>Add Post</span>
        </div>
        {/* Card */}
        <div className='h-385 w-452'>
          {/* 1. Photo */}
          <p className='text-sm font-bold'>Photo</p>
          {/* form */}
          <div className='relative mt-2 h-144 w-452'>
            <Input className='h-144 w-452 border border-[#181D27] bg-[#181D27]'></Input>
            {/* fill */}
            <div className='absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-sm'>
              <CloudUpload className='h-20 w-20 hover:cursor-pointer' />
              <p className='mt-22 space-x-4'>
                <span className='font-bold text-[#7F51F9]'>
                  Click to upload
                </span>
                <span className='text-neutral-600'>or drag and drop</span>
              </p>
              <p className='mt-4 text-neutral-600'> PNG or JPG (max. 5mb)</p>
            </div>
          </div>
          {/* 2. Caption */}
          <div className='mt-16'>
            <p className='text-sm font-bold'>Caption</p>
            {/* form */}
            <div className='mt-2 h-144 w-452 rounded-xl border-[#181D27] bg-[#181D27]'>
              <Input
                placeholder='Create your caption'
                className='mt-8 h-30 w-full border border-[#181D27] px-16 focus:border-[#181D27] focus:ring-[#181D27]'
              ></Input>
            </div>
          </div>
          {/* 3.Share Button */}
          <Button className='text-md mt-16 h-48 w-452 bg-[#6936F2] font-bold hover:cursor-pointer'>
            Share
          </Button>
        </div>
      </div>
    </section>
  );
}

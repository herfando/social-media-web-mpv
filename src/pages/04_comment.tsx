import Button from '@/components/ui/button';
import { Heart, Send, X } from 'lucide-react';

export default function Comment() {
  return (
    <section className='mx-auto mt-16 flex h-auto w-full max-w-1232 flex-col items-center justify-center px-16 md:mt-40'>
      {/* Icon X */}
      <div className='mb-24 flex w-full justify-end'>
        <X className='mb-24 h-24 w-24 self-end hover:cursor-pointer' />
      </div>
      <div className='flex'>
        {/* 1. big picture & comment */}
        <img
          className='w-720'
          src='/images/01_dummy1.png'
          alt='dummy picture'
        />
        {/* 2. image profile and comment */}
        <div className='flex h-auto w-480 flex-col justify-between bg-[#0A0D12] p-20'>
          <div>
            {/*  Profile picture */}
            <div className='flex items-center space-y-8 space-x-13'>
              {/* picture */}
              <div className='mr-16 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
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
            <p className='text-sm leading-30'>
              Creating unforgettable moments with my favorite person! 📸✨ Every
              laugh, every little adventure, every quiet moment together feels
              like magic. You make ordinary days feel extraordinary, and I’m so
              grateful to share this journey with you. Let’s keep cherishing
              every second, because with you, time always feels too short. 💕
            </p>
            {/* underline */}
            <div className='mt-24 mb-24 w-full border border-b border-[#181D27]'></div>
          </div>
          {/* Emoticon and button comment */}
          <div>
            {/* Like , comment , share icons */}
            <div className='flex justify-between space-y-16'>
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
            {/* Button comment */}
            <div className='flex space-x-16'>
              {/* Button Emoticon */}
              <div className='relative h-48 w-48 hover:cursor-pointer'>
                <Button className='h-48 w-48 rounded-xl border border-[#181D27]'></Button>
                <img
                  className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'
                  src='/icons/05_emoji.svg'
                  alt='emoji smile'
                />
              </div>
              {/* Button Comment */}
              <div className='w-full'>
                <Button className='h-48 w-full rounded-xl border border-[#181D27] hover:cursor-pointer'></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

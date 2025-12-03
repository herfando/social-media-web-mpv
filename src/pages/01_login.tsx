import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center text-[#FDFDFD]'>
      <div className='flex h-490 w-446 flex-col items-center justify-center bg-[#181D27]'>
        <div className='flex items-center justify-center gap-11'>
          <img src='/icons/01_iconbrand.svg' alt='iconbrand' />
          <p className='text-display-sm font-bold'>Sociality</p>
        </div>
        <p className='text-display-sm font-bold'>Welcome Back!</p>
        <div className='space-y-20'>
          {/* Email */}
          <div className='space-y-2'>
            <h3>Email</h3>
            <Input
              placeholder='johdoe@email.com'
              className='h-48 w-398 bg-[#0A0D12] px-16 py-9'
            />
          </div>

          {/* Password */}
          <div className='space-y-2'>
            <h3>Password</h3>
            <div className='relative'>
              <Input
                type={show ? 'text' : 'password'}
                placeholder='johndoe123'
                className='h-48 w-398 bg-[#0A0D12] px-16 py-9 pr-40'
              />
              <button
                type='button'
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-6 -translate-y-1/2 text-[#FDFDFD]'
              >
                {show ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <div>
            <Button className='bg-red h-48 w-398'>Login</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

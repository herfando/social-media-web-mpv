import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  //#region - navigate login to home
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login success');
    navigate('/home');
  };
  //#endregion

  const [show, setShow] = useState(false);

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center text-[#FDFDFD]'>
      <div className='flex h-450 w-345 flex-col items-center justify-center space-y-24 rounded-2xl border border-[#181D27] bg-[#00000033] backdrop-blur-2xl md:h-490 md:w-446'>
        <div className='flex items-center justify-center gap-11'>
          <img src='/icons/01_iconbrand.svg' alt='iconbrand' />
          <p className='text-xs-lh font-bold'>Sociality</p>
        </div>
        <p className='text-xs-lh font-bold'>Welcome Back!</p>
        <div className='w-full space-y-20 px-16 md:px-24'>
          {/* Email */}
          <div className='space-y-2'>
            <h3 className='md:text-md text-sm font-bold'>Email</h3>
            <Input
              placeholder='Enter your email'
              className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
            />
          </div>
          {/* Password */}
          <div className='space-y-2'>
            <h3 className='md:text-md text-sm font-bold'>Password</h3>
            <div className='relative'>
              <Input
                type={show ? 'text' : 'password'}
                placeholder='Enter your password'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
              <button
                type='button'
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-6 -translate-y-1/2 text-[#FDFDFD]'
              >
                {show ? (
                  <EyeOff size={24} className='hover:cursor-pointer' />
                ) : (
                  <Eye size={24} className='hover:cursor-pointer' />
                )}
              </button>
            </div>
          </div>
          {/* Button */}
          <div>
            <Button
              onClick={handleLogin}
              className='text-md h-48 w-full rounded-full bg-[#6936F2] font-bold hover:cursor-pointer'
            >
              Login
            </Button>
          </div>
          {/* Don't have an account? */}
          <p className='md:text-md space-x-4 text-center text-sm font-semibold'>
            <span>Don't have an account?</span>
            <Link to='/register'>
              <span className='text-[#7F51F9]'>Register</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

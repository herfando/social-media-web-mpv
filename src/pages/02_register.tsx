import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  //#region
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log('Register success');
    navigate('/login');
  };

  //#endregion

  const [show, setShow] = useState(false);

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center bg-black text-[#FDFDFD]'>
      <div className='flex h-746 w-345 flex-col items-center justify-center space-y-24 rounded-2xl border border-[#181D27] bg-[#00000033] backdrop-blur-2xl md:h-784 md:w-523'>
        <div className='flex items-center justify-center gap-11'>
          <img src='/icons/01_iconbrand.svg' alt='iconbrand' />
          <p className='text-xs-lh font-bold'>Sociality</p>
        </div>
        <p className='text-xs-lh font-bold'>Register</p>
        <div className='w-full space-y-20 px-16 md:px-24'>
          {/* Email */}
          <div className='space-y-2'>
            <h3 className='md:text-md text-sm font-bold'>Email</h3>
            <Input
              placeholder='Enter your email'
              className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
            />
          </div>
          {/* Username */}
          <div className='space-y-2'>
            <h3 className='md:text-md text-sm font-bold'>Username</h3>
            <Input
              placeholder='Enter your email'
              className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
            />
          </div>
          {/* Number Phone */}
          <div className='space-y-2'>
            <h3 className='md:text-md text-sm font-bold'>Number Phone</h3>
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
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pr-40'
              />
              <button
                type='button'
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-6 -translate-y-1/2 text-[#FDFDFD]'
              >
                {show ? (
                  <EyeOff
                    size={24}
                    className='text-neutral-400 hover:cursor-pointer'
                  />
                ) : (
                  <Eye
                    size={24}
                    className='text-neutral-400 hover:cursor-pointer'
                  />
                )}
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div className='space-y-2'>
            <h3 className='md:text-md text-sm font-bold'>Confirm Password</h3>
            <div className='relative'>
              <Input
                type={show ? 'text' : 'password'}
                placeholder='Enter your Confirm Password'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pr-40'
              />
              <button
                type='button'
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-6 -translate-y-1/2 text-[#FDFDFD]'
              >
                {show ? (
                  <EyeOff
                    size={24}
                    className='text-neutral-400 hover:cursor-pointer'
                  />
                ) : (
                  <Eye
                    size={24}
                    className='text-neutral-400 hover:cursor-pointer'
                  />
                )}
              </button>
            </div>
          </div>
          {/* Button */}
          <div>
            <Button
              onClick={handleRegister}
              className='text-md h-48 w-full rounded-full bg-[#6936F2] font-bold hover:cursor-pointer'
            >
              Submit
            </Button>
          </div>
          {/* Don't have an account? */}
          <p className='md:text-md space-x-4 text-center text-sm font-semibold'>
            <span>Don't have an account?</span>
            <Link to='/login'>
              <span className='text-[#7F51F9]'>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

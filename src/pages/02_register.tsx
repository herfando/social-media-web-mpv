import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerSchema } from '@/validation/auth';
import toast from 'react-hot-toast';
export default function Login() {
  //#region zod validation
  const [errors, setErrors] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      username: (form.elements.namedItem('username') as HTMLInputElement).value,
      numberPhone: (form.elements.namedItem('numberPhone') as HTMLInputElement)
        .value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
      confirmPassword: (
        form.elements.namedItem('confirmPassword') as HTMLInputElement
      ).value,
    };
    try {
      const parsed = registerSchema.parse(formData);
      toast.success('Registration successful!');
      console.log('Validation success:', parsed);
      setErrors(null);
    } catch (err: any) {
      toast.error('Registration failed. Please check your input.');
      console.log('Validation failed:', err?.errors);
      setErrors(err?.errors?.[0]?.message || 'Validation failed');
    }
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
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Email</h3>
              <Input
                name='email'
                placeholder='Enter your email'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* Username */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Username</h3>
              <Input
                name='username'
                placeholder='Enter your username'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* Number Phone */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Number Phone</h3>
              <Input
                name='numberPhone'
                placeholder='Enter your number phone'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
              />
            </div>
            {/* Password */}
            <div className='space-y-2'>
              <h3 className='md:text-md text-sm font-bold'>Password</h3>
              <div className='relative'>
                <Input
                  name='password'
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
                  name='confirmPassword'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter your Confirm Password'
                  className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pr-40'
                />
                <button
                  type='submit'
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
                type='submit'
                className='text-md h-48 w-full rounded-full bg-[#6936F2] font-bold hover:cursor-pointer'
              >
                Submit
              </Button>
            </div>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
          </form>
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

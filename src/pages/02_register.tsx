import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthForm } from '@/query/hooks/form/useAuthForm';
import { useAuthApi } from '@/query/hooks/api/useAuthApi';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();

  // Hook form
  const { registerForm } = useAuthForm();

  // Hook API
  const { submitRegister: apiRegister } = useAuthApi({
    registerForm,
    loginForm: null as any,
  });

  // Show/hide password
  const [show, setShow] = useState(false);

  // Submit handler lengkap
  const submitRegister = async () => {
    try {
      await apiRegister;
      toast.success('Register sukses!');
      registerForm.reset();
      navigate('/login');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Register gagal');
    }
  };

  // Ambil errors dari formState
  const {
    formState: { errors },
  } = registerForm;

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center bg-black text-[#FDFDFD]'>
      <div className='flex h-746 w-523 flex-col items-center justify-center space-y-24 rounded-2xl border border-[#181D27] bg-[#00000033] backdrop-blur-2xl md:h-784 md:w-523'>
        <div className='flex items-center justify-center gap-11'>
          <img src='/icons/01_iconbrand.svg' alt='iconbrand' />
          <p className='text-xs-lh font-bold'>Sociality</p>
        </div>
        <p className='text-xs-lh font-bold'>Register</p>
        <div className='w-full space-y-24 px-16 md:px-24'>
          <form
            className='space-y-24'
            onSubmit={registerForm.handleSubmit(submitRegister)}
          >
            {/* Name */}
            <div className='space-y-2'>
              <h3 className='text-sm font-bold'>Name</h3>
              <Input
                type='text'
                placeholder='Enter your name'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
                {...registerForm.register('name')}
              />
              {errors.name && (
                <p className='text-red-500'>{errors.name.message}</p>
              )}
            </div>
            {/* Username */}
            <div className='space-y-2'>
              <h3 className='text-sm font-bold'>Username</h3>
              <Input
                type='text'
                placeholder='Enter your username'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
                {...registerForm.register('username')}
              />
              {errors.username && (
                <p className='text-red-500'>{errors.username.message}</p>
              )}
            </div>
            {/* Email */}
            <div className='space-y-2'>
              <h3 className='text-sm font-bold'>Email</h3>
              <Input
                type='email'
                placeholder='Enter your email'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
                {...registerForm.register('email')}
              />
              {errors.email && (
                <p className='text-red-500'>{errors.email.message}</p>
              )}
            </div>
            {/* Phone */}
            <div className='space-y-2'>
              <h3 className='text-sm font-bold'>Phone</h3>
              <Input
                type='text'
                placeholder='Enter your number phone'
                className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9'
                {...registerForm.register('phone')}
              />
              {errors.phone && (
                <p className='text-red-500'>{errors.phone.message}</p>
              )}
            </div>
            {/* Password */}
            <div className='space-y-2'>
              <h3 className='text-sm font-bold'>Password</h3>
              <div className='relative'>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pr-40'
                  {...registerForm.register('password')}
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
              {errors.password && (
                <p className='text-red-500'>{errors.password.message}</p>
              )}
            </div>
            {/* Confirm Password */}
            <div className='space-y-2'>
              <h3 className='text-sm font-bold'>Confirm Password</h3>
              <div className='relative'>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder='Enter your Confirm Password'
                  className='text-md h-48 w-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pr-40'
                  {...registerForm.register('confirmPassword')}
                />
              </div>
              {errors.confirmPassword && (
                <p className='text-red-500'>{errors.confirmPassword.message}</p>
              )}
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
          </form>
          {/* Don't have an account? */}
          <p className='space-x-4 text-center text-sm font-semibold'>
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

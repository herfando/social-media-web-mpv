'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';

export default function ToggleHamburger({}) {
  //   const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative block md:hidden'>
      {/* Navbar atas */}
      <nav className='flex items-center justify-between'>
        {/* Tombol hamburger */}
        <button
          onClick={handleToggleMenu}
          className='z-20 rounded-lg'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            // Ikon X saat terbuka
            <X
              size={28}
              className='text-white hover:cursor-pointer dark:text-white'
            />
          ) : (
            // Garis 3 manual
            <div className='grid h-24 w-24 -translate-x-4 justify-items-end gap-6 p-3 hover:cursor-pointer'>
              <span className='h-2 w-24 bg-white'></span>
              <span className='h-2 w-24 bg-white'></span>
              <span className='h-2 w-24 bg-white'></span>
            </div>
          )}
        </button>
      </nav>

      {/* Menu mobile muncul setelah diklik */}
      <div
        className={`fixed top-0 left-0 z-1 h-136 w-full transform text-black transition-transform duration-1000 ease-in-out lg:hidden dark:bg-black dark:text-white ${
          isOpen
            ? 'translate-x-0' // /* TRANSLATE HERE: menu muncul */
            : '-translate-x-full' // /* TRANSLATE HERE: menu geser keluar */
        }`}
      >
        <div className='custom-container mt-64 flex h-72 w-full items-center justify-center gap-12 sm:hidden'>
          {/* Button Login & Register */}
          <Button
            // onClick={() => navigate('/login')}
            className='text-md h-40 w-full basis-1/2 rounded-full border border-[#D5D7DA] font-bold text-white hover:cursor-pointer hover:bg-white hover:text-black'
          >
            Login
          </Button>
          <Button
            // onClick={() => navigate('/register')}
            className='text-md h-40 w-full basis-1/2 rounded-full bg-[#6936F2] font-bold text-white hover:cursor-pointer hover:bg-white hover:text-black'
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

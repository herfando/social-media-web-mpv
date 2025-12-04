import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import SearchInput from '@/components/ui/searchInput';

export default function NavbarUser() {
  const [showSearch, setShowSearch] = useState(false);
  //#region - Search Query
  const onSearchChange = (eOrVal: any) => {
    if (typeof eOrVal === 'string') {
      return;
    }
    if (eOrVal && typeof eOrVal.target?.value === 'string') {
      return;
    }
  };
  //#endregion

  return (
    <section className='custom-container flex h-80 w-full items-center justify-between'>
      {/* Icon */}
      <div className='flex items-center gap-11'>
        <img
          className='h-30 w-30'
          src='../icons/01_iconbrand.svg'
          alt='icon brand'
        />
        <p className='text-xs-lh font-bold'>Sociality</p>
      </div>

      {/* Desktop Search */}
      <div className='relative hidden lg:flex'>
        <SearchInput
          placeholder='Search'
          onChange={onSearchChange}
          className='text-md h-48 w-398 rounded-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pl-42'
        />
        <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-neutral-600' />
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className='relative sm:mr-20 sm:ml-20 md:hidden'>
          <Input
            placeholder='Search'
            onChange={onSearchChange}
            className='text-md h-48 w-130 rounded-full border border-[#181D27] bg-[#0A0D12] px-16 py-9 pl-42 sm:w-full'
          />
          <Search className='absolute top-1/2 left-16 -translate-y-1/2 text-neutral-600' />
        </div>
      )}
      {/*  icon Search & hamburger display in mobile*/}
      <div className='flex items-center'>
        {/* Search */}
        <Search
          onClick={() => setShowSearch((prev) => !prev)}
          className='z-2 mr-16 h-24 w-24 text-[Neutral/950] hover:cursor-pointer'
        />
        {/* Profile picture */}
        <div className='mr-16 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
          <span className='text-3xl text-gray-400'>👤</span>
        </div>
      </div>
    </section>
  );
}

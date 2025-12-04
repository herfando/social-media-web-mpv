import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Button from '../ui/button';
import ToggleHamburger from '../ui/togglehamburger';
import { useState } from 'react';
import SearchInput from '@/components/ui/searchInput';

export default function NavbarGuest() {
  const [showSearch, setShowSearch] = useState(false);
  //#region - Search Query

  const handleSearch = (value: string) => {
    const q = (value || '').trim();
  };

  const onSearchChange = (eOrVal: any) => {
    if (typeof eOrVal === 'string') {
      handleSearch(eOrVal);
      return;
    }
    if (eOrVal && typeof eOrVal.target?.value === 'string') {
      handleSearch(eOrVal.target.value);
      return;
    }
    handleSearch('');
  };
  //#endregion

  return (
    <section className='custom-container flex h-80 w-full items-center justify-between'>
      {/* Icon */}
      <div className='flex gap-11'>
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
      <div className='flex items-center sm:hidden'>
        {/* Search */}
        <Search
          onClick={() => setShowSearch((prev) => !prev)}
          className='z-2 mr-16 h-24 w-24 text-[Neutral/950] hover:cursor-pointer'
        />
        {/* Hamburger */}
        <ToggleHamburger />
      </div>
      {/* login register */}
      <div className='hidden gap-12 sm:flex'>
        <Button className='h-44 w-130 border border-[#181D27] font-bold hover:cursor-pointer'>
          Login
        </Button>
        <Button className='h-44 w-130 bg-[#6936F2] font-bold hover:cursor-pointer'>
          Register
        </Button>
      </div>
    </section>
  );
}

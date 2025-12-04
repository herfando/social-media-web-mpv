export default function SearchUser() {
  return (
    <section className='mx-auto h-auto w-full max-w-523 rounded-2xl bg-[#0A0D12] px-16'>
      {/* 1. Any Result */}
      <div className='flex h-106 items-center'>
        {/* picture profile */}
        <div className='mr-16 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
          <span className='text-3xl text-gray-400'>👤</span>
        </div>
        {/* name and description */}
        <div className='text-sm'>
          <p className='font-bold'>John Doe</p>
          <p className='font-regular text-[#A4A7AE]'>John Doe</p>
        </div>
      </div>
      {/* 2. No Result */}
      <div className='flex w-full flex-col items-center justify-center gap-4 rounded-2xl md:h-195'>
        <p className='text-md font-bold'>No results found</p>
        <p className='font-regular text-sm text-[#A4A7AE]'>
          Change your keyword
        </p>
      </div>
    </section>
  );
}

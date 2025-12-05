export default function MyProfile() {
  return (
    <section className='bg-accent-green mx-auto mt-16 h-auto w-844 pr-16 pl-16 md:mt-40'>
      {/* 1. profile and edit profile */}
      <div>
        {/*  Profile picture */}
        <div className='flex items-center space-x-13'>
          {/* picture */}
          <div className='mr-16 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'>
            <span className='text-3xl text-gray-400'>👤</span>
          </div>
          {/* Name and status online */}
          <div className='items-center space-y-2'>
            <p className='text-sm font-bold'>Johndoe</p>
            <p className='font-regular text-xs text-[#A4A7AE]'>1 Minutes Ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}

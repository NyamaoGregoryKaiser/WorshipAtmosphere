import React from 'react';

const Header = () => {
  return (
    <header className='feedback-header-bg px-primary h-[205px] md:h-[305px] lg:h-[405px] flex flex-col items-center justify-center text-center gap-3 text-white'>
      <h1 className='font-secondary font-bold text-2xl md:text-[32px] lg:text-[40px]'>
        Feedback
      </h1>
      <p className='font-normal text-lg md:text-xl lg:text-2xl'>
        Let’s edify the body of Christ together
      </p>
    </header>
  );
};

export default Header;

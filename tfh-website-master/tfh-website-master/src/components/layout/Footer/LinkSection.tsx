import Link from 'next/link';
import React from 'react';
import links from './links';
import Image from 'next/image';
import socialLinks from './socialLinks';

function LinkSection() {
  return (
    <div>
      {/* Page links */}
      <div className='grid grid-cols-3 gap-[3vw] text-white'>
        {links.map((link) => (
          <ul key={link.heading.title}>
            <p className='font-secondary font-semibold text-lg mb-4'>
              {link.heading.title}
            </p>
            <div className='flex flex-col gap-2'>
              {link.heading.subLinks.map((subLink) => (
                <li
                  className='hover:text-secondary duration-500 text-sm'
                  key={subLink.name}
                >
                  {subLink.external ? (
                    <a href={subLink.destination} target='_blank' rel='noreferrer'>
                      {subLink.name}
                    </a>
                  ) : (
                    <Link href={subLink.destination}>{subLink.name}</Link>
                  )}
                </li>
              ))}
            </div>
          </ul>
        ))}
      </div>
      {/* Social Links */}
      <div className='text-white lg:mt-[127px] mt-[67px] flex items-center gap-[30px]'>
        {socialLinks.map((link) => (
          <a
            href={link.destination}
            key={link.destination}
            target='_blank'
            rel='noreferrer'
          >
            <Image src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinkSection;

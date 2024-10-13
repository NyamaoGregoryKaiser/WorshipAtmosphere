import Button from '@/common/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import links from './links';

function NavLinks() {
  const router = useRouter();
  const isActiveRoute = (route: string) => {
    return router.pathname === route;
    1;
  };
  return (
    <div className='flex items-center'>
      <div className='flex items-center gap-9'>
        {links.map((link) => (
          <Link
            key={link.destination}
            href={link.destination}
            className={
              isActiveRoute(link.destination)
                ? 'pl-[10px] pr-[10px] pb-[10px] pt-[10px] border-b-secondary border-b-[3px] text-secondary'
                : ''
            }
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* <Button className='ml-[4vw]'>Log in</Button> */}
    </div>
  );
}

export default NavLinks;

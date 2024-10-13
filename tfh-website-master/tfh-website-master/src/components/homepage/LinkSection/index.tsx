import React from 'react';
import LinkCard from './LinkCard';
import links from './links';

function LinkSection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {links.map((link) => (
        <LinkCard key={link.label} link={link} />
      ))}
    </div>
  );
}

export default LinkSection;

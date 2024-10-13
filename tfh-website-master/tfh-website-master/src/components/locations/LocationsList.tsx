// import React from 'react';
// import churchLocations from './churchLocations';

// const LocationsList = () => {
//   return (
//     <section id='church-locations' className='px-primary py-[100px]'>
//       <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//         {churchLocations.map((item) => (
//           <li
//             key={item.name}
//             className='py-[18px] px-5 border border-primary rounded-[5px] bg-white'
//           >
//             <p className='text-primary md:text-xl lg:text-3xl mb-[7px] font-bold font-secondary'>
//               {item.name}
//             </p>
//             <p className='md:text-lg'>{item.address}</p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default LocationsList;
import React from 'react';
import churchLocations from './churchLocations';

const LocationsList: React.FC = () => {
  return (
    <section id='church-locations' className='px-primary py-[100px]'>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {churchLocations.map((item, index) => (
          <li 

            key={index}
            className='py-[18px] px-5 border border-primary rounded-[5px] bg-white'
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className='text-primary md:text-xl lg:text-3xl mb-[7px] font-bold font-secondary block'
            >
              {item.name}
            
            <p className='md:text-lg'>{item.address}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationsList;

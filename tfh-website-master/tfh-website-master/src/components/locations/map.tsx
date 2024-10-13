import React from 'react';
import churchLocations from './churchLocations'; // Assuming you have this file exported from a module

const ChurchLocations: React.FC = () => {
  return (
    <div>
      <h1>Church Locations</h1>
      <ul>
        {churchLocations.map((location, index) => (
          <li key={index}>
            <a href={location.link} target="_blank" rel="noopener noreferrer">
              {location.name}
            </a>
            <p>{location.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChurchLocations;

import React from 'react';
import ImageCard from './ImageCard';
import { ImageGroup1, ImageGroup2, ImageGroup3 } from './images';
import styles from './styles.module.css';

function GallerySection() {
  return (
    <div className='flex gap-[18px] lg:flex:[50%] h-[50vh] lg:h-full'>
      <div className={styles.imageSlider}>
        {ImageGroup1.map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </div>
      <div
        className={styles.imageSlider}
        style={{
          animationDirection: 'alternate-reverse',
        }}
      >
        {ImageGroup2.map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </div>
      <div className={styles.imageSlider}>
        {ImageGroup3.map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </div>
    </div>
  );
}

export default GallerySection;

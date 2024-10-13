import React from 'react';
import Youtube from '../../assets/icons/svgs/media/streaming-platforms/youtube.svg';
import Facebook from '../../assets/icons/svgs/media/streaming-platforms/facebook.svg';
import Mixlr from '../../assets/icons/svgs/media/streaming-platforms/mixlr.svg';

export interface PlatformType {
  image: React.ReactElement;
  link: string;
}

const streamingPlatforms: PlatformType[] = [
  {
    image: <Youtube />,
    link: 'https://www.youtube.com/@TFHCOnlineTv',
  },
  {
    image: <Facebook />,
    link: 'https://www.facebook.com/tfhcng/',
  },
  {
    image: <Mixlr />,
    link: 'https://richardudoh.mixlr.com/',
  },
];

export default streamingPlatforms;

import { StaticImageData } from 'next/image';
import mixlrImage from '@/assets/images/resources/streaming-channels/mixlr.svg';
import facebookImage from '@/assets/images/resources/streaming-channels/facebook.svg';
import youtubeImage from '@/assets/images/resources/streaming-channels/youtube.svg';

interface StreamChannel {
  image: StaticImageData;
  link: string;
}

export const streamingChannels: StreamChannel[] = [
  {
    image: youtubeImage,
    link: 'https://www.youtube.com/@TFHCOnlineTv',
  },
  {
    image: facebookImage,
    link: 'https://www.facebook.com/tfhcng/',
  },
  {
    image: mixlrImage,
    link: 'https://richardudoh.mixlr.com/',
  },
];

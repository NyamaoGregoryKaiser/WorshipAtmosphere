import React from 'react';
import Mixlr from '../../assets/icons/svgs/media/streaming-platforms/mixlr.svg';

export interface ArchiveType {
  image: React.ReactElement;
  link: string;
  label: string;
}

const archiveChannels: ArchiveType[] = [
  {
    image: <Mixlr />,
    link: 'https://drive.google.com/drive/folders/1AvG61xWQFU72Iorm5EnIL0zYPbl-qC7p',
    label: 'Morning Prayer Recordings',
  },
];

export default archiveChannels;

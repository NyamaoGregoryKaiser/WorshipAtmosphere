import React from 'react';
// import LivestreamIcon from '../../assets/icons/svgs/media/livestream.svg';
import VideoIcon from '../../assets/icons/svgs/media/video.svg';
import PodcastIcon from '../../assets/icons/svgs/media/podcast.svg';
import MessageIcon from '../../assets/icons/svgs/media/messages.svg';
import ArchiveIcon from '../../assets/icons/svgs/media/archive.svg';
import { screenNames } from '../../screens/screenNames';

const mediaContents: {
  icon: React.ReactNode;
  mainText: string;
  subText: string;
  showInfoText?: boolean;
  isLive?: boolean;
  destination: string;
}[] = [
  // {
  //   icon: <LivestreamIcon width={40} height={29.46} />,
  //   mainText: 'Livestream',
  //   subText: 'Join us live for our online services',
  //   showInfoText: true,
  //   isLive: true,
  //   destination: '',
  // },
  {
    icon: <VideoIcon width={40} height={40} />,
    mainText: 'Streaming Platforms',
    subText:
      'Join us live for our online services using other channels like YouTube, Facebook, etc.',
    destination: screenNames.STREAMING_PLATFORMS,
  },
  {
    icon: <PodcastIcon width={40} height={40.22} />,
    mainText: 'Podcast',
    subText:
      'Strengthen your spiritual growth in the word by listening to our messages',
    destination: screenNames.PODCASTS,
  },
  {
    icon: <MessageIcon width={40} height={40} />,
    mainText: 'Recent Messages',
    subText:
      'Watch our past Sunday services message to hold you through the year.',
    destination: screenNames.RECENT_MESSAGES,
  },
  {
    icon: <ArchiveIcon width={40} height={40} />,
    mainText: 'Archive',
    subText:
      'View, download and listen to our old messages that have been kept and preserved for you',
    destination: screenNames.ARCHIVE,
  },
];

export default mediaContents;

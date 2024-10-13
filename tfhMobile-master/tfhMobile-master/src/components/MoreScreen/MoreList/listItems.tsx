import React from 'react';
import HomeIcon from '../../../assets/icons/svgs/more/home.svg';
import InfoIcon from '../../../assets/icons/svgs/more/info.svg';
import VideoIcon from '../../../assets/icons/svgs/more/video.svg';
import OpenBookIcon from '../../../assets/icons/svgs/more/book-open.svg';
import NoteIcon from '../../../assets/icons/svgs/more/note.svg';
import PodcastIcon from '../../../assets/icons/svgs/more/podcast.svg';
import EventsIcon from '../../../assets/icons/svgs/more/events.svg';
import AnnouncementIcon from '../../../assets/icons/svgs/more/announcement.svg';
import FeedbackIcon from '../../../assets/icons/svgs/more/feedback.svg';
import { screenNames } from '../../../screens/screenNames';

export interface ListType {
  icon: React.ReactNode;
  title: string;
  type?: 'normal' | 'authentication';
  screenName: string;
}

const listItems: ListType[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    screenName: screenNames.HOME,
  },
  {
    title: 'About The Church',
    icon: <InfoIcon />,
    screenName: screenNames.ABOUT,
  },
  // {
  //   title: 'Livestream',
  //   icon: <VideoIcon />,
  //   screenName: screenNames.LIVESTREAM,
  // },
  {
    title: 'Devotional',
    icon: <OpenBookIcon />,
    screenName: screenNames.DEVOTIONALS,
  },
  {
    title: 'Testimonies',
    icon: <NoteIcon />,
    screenName: screenNames.TESTIMONIES,
  },
  {
    title: 'Podcast',
    icon: <PodcastIcon />,
    screenName: screenNames.PODCASTS,
  },
  {
    title: 'Events',
    icon: <EventsIcon />,
    screenName: screenNames.EVENTS,
  },
  {
    title: 'Announcements',
    icon: <AnnouncementIcon />,
    screenName: screenNames.ANNOUNCEMENTS,
  },
  {
    title: 'Feedback',
    icon: <FeedbackIcon />,
    screenName: screenNames.FEEDBACK,
  },
  {
    title: 'Authentication',
    icon: <></>,
    type: 'authentication',
    screenName: screenNames.LOGIN,
  },
];

export default listItems;

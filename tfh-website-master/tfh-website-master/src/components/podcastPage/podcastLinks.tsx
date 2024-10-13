import Spotify from '@/assets/svgs/media/podcasts/spotify.svg';
import Google from '@/assets/svgs/media/podcasts/google.svg';
import Apple from '@/assets/svgs/media/podcasts/apple.svg';
import Overcast from '@/assets/svgs/media/podcasts/overcast.svg';
import PocketCast from '@/assets/svgs/media/podcasts/pocket_cast.svg';
import RadioPublic from '@/assets/svgs/media/podcasts/radio_public.svg';
import { StaticImageData } from 'next/image';

const podcastLinks: {
  icon: StaticImageData;
  link: string;
}[] = [
  {
    icon: Spotify,
    link: 'https://open.spotify.com/show/0HWKxoe1d0FsqlsRSUoL8A',
  },
  {
    icon: Google,
    link: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xNTcxNTNmOC9wb2RjYXN0L3Jzcw==',
  },
  {
    icon: Apple,
    link: 'https://podcasts.apple.com/us/podcast/the-fathers-house-church/id1504361115?uo=4',
  },
  {
    icon: Overcast,
    link: 'https://overcast.fm/itunes1253796810/fathers-house-church-sermon-of-the-week',
  },
  {
    icon: PocketCast,
    link: 'https://pca.st/2oyvb75l',
  },
  {
    icon: RadioPublic,
    link: 'https://radiopublic.com/the-fathers-house-church-WkOMem',
  },
];

export default podcastLinks;

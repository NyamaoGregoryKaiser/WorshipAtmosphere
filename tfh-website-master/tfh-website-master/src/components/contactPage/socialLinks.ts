import InstagramIcon from '@/assets/svgs/contact/socials/instagram.svg';
import FacebookIcon from '@/assets/svgs/contact/socials/facebook.svg';
import YoutubeIcon from '@/assets/svgs/contact/socials/youtube.svg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const socialLinks: Link[] = [
  {
    alt: 'Youtube Channel',
    src: YoutubeIcon,
    destination: 'https://www.youtube.com/@TFHCOnlineTv',
  },
  {
    alt: 'Facebook Profile',
    src: FacebookIcon,
    destination: 'https://www.facebook.com/tfhcng',
  },
  {
    alt: 'Instagram Profile',
    src: InstagramIcon,
    destination: 'https://www.instagram.com/tfhcng/',
  },
];

export default socialLinks;

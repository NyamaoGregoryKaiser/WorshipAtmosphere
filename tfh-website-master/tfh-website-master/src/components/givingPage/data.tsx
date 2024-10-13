import fcmbIcon from '@/assets/images/giving/fcmb.svg';
import fbnIcon from '@/assets/images/giving/first-bank.svg';
import gtbIcon from '@/assets/images/giving/gtb.svg';
import ubaIcon from '@/assets/images/giving/uba.svg';
import zenithIcon from '@/assets/images/giving/zenith.svg';
import { StaticImageData } from 'next/image';

const offlineChannels: {
  color: string;
  icon: StaticImageData;
  accountName: string;
  accountNumber: string;
}[] = [
  {
    accountName: "SEND MONEY-worship atmosphere",
    accountNumber: '+254711761991',
    color: '#DE4A09',
    icon: gtbIcon,
  },
]

export default offlineChannels;

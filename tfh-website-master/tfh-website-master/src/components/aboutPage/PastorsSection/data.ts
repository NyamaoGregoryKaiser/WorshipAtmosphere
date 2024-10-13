import { StaticImageData } from 'next/image';
import revUdohImage from '@/assets/images/about/pastors/apostle-udoh.webp';
import mamaReeImage from '@/assets/images/about/pastors/mama-ree.webp';
import pasFidelisImage from '@/assets/images/about/pastors/pas-fidelis.webp';
import pasOmojuwaImage from '@/assets/images/about/pastors/pas-omojuwa.webp';
import pasSolaImage from '@/assets/images/about/pastors/pas-sola.webp';
import revEdithImage from '@/assets/images/about/pastors/rev-edith.webp';
import revOshiyemiImage from '@/assets/images/about/pastors/rev-oshiyemi.webp';
import revTomiImage from '@/assets/images/about/pastors/rev-tomi.webp';

export type PastorType = {
  image: StaticImageData;
  name: string;
  title: string;
};

export const pastorData: PastorType[] = [
  {
    image: revUdohImage,
    name: 'APOSTLE (DR.) RICHARD UDOH',
    title: 'Senior Pastor',
  },
  {
    image: mamaReeImage,
    name: 'PASTOR (MRS) RITA UDOH',
    title: 'Co-founding Pastor',
  },
  {
    image: revEdithImage,
    name: 'REV. EDITH UDOH',
    title: 'Pastor',
  },
  {
    image: revTomiImage,
    name: 'REV. TOMI OMOJUWA',
    title: 'Pastor',
  },
  {
    image: revOshiyemiImage,
    name: 'REV. ADESEYE OSHINYEMI',
    title: 'Pastor',
  },
  {
    image: pasOmojuwaImage,
    name: 'PASTOR (MRS.) OLAJUMOKE OMOJUWA',
    title: 'Pastor',
  },
  {
    image: pasSolaImage,
    name: 'PASTOR SOLA EWEDEMI',
    title: 'Pastor',
  },
  {
    image: pasFidelisImage,
    name: 'PASTOR FIDELIS OKONICHA',
    title: 'Pastor',
  },
];

import Location from '@/assets/svgs/contact/location.svg';
import Email from '@/assets/svgs/contact/email.svg';
import Phone from '@/assets/svgs/contact/phone.svg';

interface Info {
  icon: string;
  text: string;
  type?: 'email' | 'phone';
  alt: string;
}

const contactInfo: Info[] = [
  {
    icon: Location,
    text: 'SAMIMA HOUSE, Luthuli Avenue, Manyu Avenue.',
    alt: 'Address',
  },
  {
    icon: Email,
    text: 'mosespraise@gmail.com',
    type: 'email',
    alt: 'Email',
  },
  {
    icon: Phone,
    text: '+254 711 761 991',
    type: 'phone',
    alt: 'Phone',
  },
];

export default contactInfo;

import PaystackIcon from '../../../assets/icons/svgs/give/paystack.svg';
import SelarIcon from '../../../assets/icons/svgs/give/selar.svg';

const onlineChannels: {
  borderColor: string;
  backgroundColor: string;
  icon: React.ReactNode;
  text: string;
}[] = [
  {
    text: 'Give with Paystack',
    borderColor: '#56C1F2',
    backgroundColor: '#EDF6FA',
    icon: <PaystackIcon width={43} height={42} />,
  },
  {
    text: 'Give with Selar',
    borderColor: '#5A0B4D',
    backgroundColor: '#F8EBF5',
    icon: <SelarIcon />,
  },
];

export default onlineChannels;

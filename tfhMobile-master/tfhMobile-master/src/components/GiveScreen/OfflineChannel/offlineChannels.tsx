import FirstBankIcon from '../../../assets/icons/svgs/give/banks/fb.svg';
import FCMBIcon from '../../../assets/icons/svgs/give/banks/fcmb.svg';
import GTIcon from '../../../assets/icons/svgs/give/banks/gt.svg';
import UbaIcon from '../../../assets/icons/svgs/give/banks/uba.svg';
import ZenithIcon from '../../../assets/icons/svgs/give/banks/zenith.svg';
import appColors from '../../../theme/colors';

const offlineChannels: {
  borderColor: string;
  backgroundColor: string;
  icon: React.ReactNode;
  accountName: string;
  textColor: string;
  accountNumber: string;
}[] = [
  {
    accountName: 'The Father’s House Church',
    accountNumber: '001 0916 633',
    borderColor: '#DE4A09',
    backgroundColor: '#FDF4F0',
    icon: <GTIcon />,
    textColor: appColors.brown,
  },
  {
    accountName: 'The Father’s House Church',
    accountNumber: '366 2370 022',
    borderColor: '#5A0B4D',
    backgroundColor: '#F8EBF5',
    icon: <FCMBIcon />,
    textColor: appColors.brown,
  },
  {
    accountName: 'The Father’s House Church',
    accountNumber: '101 6346 517',
    borderColor: '#D61B0C',
    backgroundColor: '#FBEFEE',
    icon: <UbaIcon />,
    textColor: appColors.brown,
  },
  {
    accountName: 'The Father’s House Church',
    accountNumber: '202 1398 890',
    borderColor: '#03476E',
    backgroundColor: '#EEF6FB',
    icon: <FirstBankIcon />,
    textColor: appColors.primaryColor,
  },
  {
    accountName: 'The Father’s House Church',
    accountNumber: '101 0811 367',
    borderColor: '#808285',
    backgroundColor: '#F5F5F5',
    icon: <ZenithIcon />,
    textColor: appColors.primaryColor,
  },
];

export default offlineChannels;

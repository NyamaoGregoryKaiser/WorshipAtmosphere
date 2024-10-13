import { ImageSourcePropType } from 'react-native';

export interface LocationType {
  name: string;
  address: string;
  imageLink: ImageSourcePropType;
}

const churchLocations: LocationType[] = [
  {
    name: 'HEADQUARTERS',
    address: '90, Ojodu-Akute Road, Ajayi Farm Busstop, Akute',
    imageLink: require('../../../assets/images/church-locations/headquarters.png'),
  },
  {
    name: 'MOWE CHURCH',
    address:
      '3, Transformation Avenue, Opposite Omapet Filling Station, Ofada Road Mowe',
    imageLink: require('../../../assets/images/church-locations/mowe.png'),
  },
  {
    name: 'IBADAN CHURCH',
    address: 'Ologuneru, Beside Ekerin Junction. New Eleyele, Ibadan',
    imageLink: require('../../../assets/images/church-locations/ibadan.png'),
  },
  {
    name: 'AREPO CHURCH',
    address: '1/3 Eruobodo Plaza, Journalist Estate Road, Arepo',
    imageLink: require('../../../assets/images/church-locations/arepo.png'),
  },
];

export default churchLocations;

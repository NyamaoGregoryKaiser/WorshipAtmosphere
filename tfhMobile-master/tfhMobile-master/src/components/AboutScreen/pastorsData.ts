import { ImageSourcePropType } from 'react-native';

export interface PastorType {
  name: string;
  position: string;
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
  imageLink: ImageSourcePropType;
  description: string;
  additionalDescription?: string[];
}

const pastorsData: PastorType[] = [
  {
    name: 'Apostle (Dr.) Richard Udoh',
    position: 'Senior Pastor',
    description:
      'Apostle (Dr.) Udoh is the Senior Pastor of The Father’s House as well as the General Overseer of The Manifest Ministries International. An ordained minister of the Gospel. He was for over 26 years a member of one of the frontline Pentecostal churches in Nigeria.',
    imageLink: require('../../assets/images/pastors/Apostle-Richard-Udoh.png'),
    additionalDescription: [
      'Apostle Udoh is a 1988 graduate of Veterinary Medicine from the University of Ibadan. He also holds a 1990 and 1993 Post Graduate Diploma and a Master of Business Administration degree in finance respectively from the University of Nigeria, Enugu campus. He has had a little over 13 years cognate experience in the finance industry (3 in insurance and 10 in banking). Upon receiving the call of God on his life for full time ministry, he voluntarily resigned and left the banking industry on December 31, 2002.',
      'Apostle Udoh’s marriage to Pastor (Mrs.) Rita Udoh (gone to be with the Lord) was blessed with 3 children: two boys and a girl. He is now married to Rev. Edith Udoh.',
    ],
    instagramLink: 'https://www.instagram.com/drrichardudoh/',
    facebookLink: 'https://www.facebook.com/richard.udoh.9/',
  },
  {
    name: 'Pastor (Mrs) Rita Udoh',
    position: 'Co-founding Pastor',
    description:
      'Pastor (Mrs) Rita Udoh was a 1988 graduate of Dramatic Arts from Obafemi Awolowo University, Ile – Ife. She had a wealth of experience as an administrator in some of Nigeria’s leading reputable organizations.',
    additionalDescription: [
      'Mama Ree as she was fondly called was the Co-founding Pastor of The Father’s House. She headed the Maturity Ministry and was deeply passionate about Christian growth, maturity and was an expert in mentoring. She and Apostle Richard Udoh were blessed with 3 God-fearing children. She went on to be with the Lord on August 10, 2018.',
    ],
    imageLink: require('../../assets/images/pastors/mamaree.jpeg'),
  },

  {
    name: 'Reverend Edith Udoh',
    position: 'Pastor',
    description:
      'Reverend Edith is a 2003 graduate of Law from University of Lagos, Akoka. She is an experienced lawyer and a tax practitioner having been with the Tax authority for over a decade.',
    additionalDescription: [
      'She has been in the music ministry for almost two decades and she is popularly known as Minstrel Edith. She is an anointed worshipper.',
      'She is also an anointed minister of the word and has at different times in addition to the singing ministry functioned in the ministry for singles and became the Founder of Kingdom Vessels – a ministry for the matured singles where they are taught how to align with the perfect will of God in all aspects of life particularly in their marital destinies and has successfully mentored many in this area.',
      'She is blessed with 3 God fearing children.',
    ],
    imageLink: require('../../assets/images/pastors/Rev-Mrs-Udoh.png'),
    instagramLink: 'https://www.instagram.com/edithminstrel/',
    facebookLink: 'https://www.facebook.com/edith.minstrel',
    twitterLink: 'https://twitter.com/minstrel_edith',
  },
  {
    name: 'Reverend Tomi Omojuwa',
    position: 'Pastor',
    description:
      'Reverend Oluwatomisin Omojuwa  is a Fellow of the Institute of Chartered Accountants of Nigeria. He is a dynamic Senior Financial accounting professional with progressive experience in auditing, banking operations, tax consulting, relationship management and business development spanning over 26 years.',
    additionalDescription: [
      'He is the Managing Partner, Audit &Tax – Tomi Omojuwa & Co Chartered Accountants – a  firm that is into managing and facilitating all Auditing and Tax related training for the firm and also providing general Audit, Tax, and Financial consultancy services for their vast client base.',
      'Reverend Omojuwa was a Senior Manager/Branch Head of Zenith Bank, Oke-arin Branch from 2004 to 2012. He was also the Group Head of Audit at Silverbird Group from 2016 to 2018.',
      'He is a Financial Consultant; an expert in Business Plan writing, a Church Treasurer, Assessor with ICAN and a Facilitator in FITC, TOM Associates, ICAN, LCCI  etc.',
      'Oluwatomisin Omojuwa graduated with a First Class Honours in Economics from the Obafemi Awolowo University, lle-Ife, Osun State in1989. He was the Best Graduating Student in the Department of Economics. He also holds an MBA (Marketing) and an MSc (Economics) from the University of Lagos. He just completed his Microfinance Certification Programme with 5 Distinctions and 1 Pass at first attempt.',
      'He is married to his wife Olajumoke also a Chartered Accountant and they are blessed with three lovely children. He loves reading, writing, teaching and swimming.',
    ],
    imageLink: require('../../assets/images/pastors/rev-omojuwa-1.jpg'),
    linkedinLink:
      'https://www.linkedin.com/in/tomi-omojuwa-mcib-fca-msc-mba-07962254/',
    facebookLink: 'https://www.facebook.com/oluwatomisin.omojuwa',
  },
  {
    name: 'Rev. Adeseye Oshinyemi',
    position: 'Pastor',
    description:
      'Reverend Emmanuel Adeseye Oshinyemi had an encounter with the Lord over 29 years ago. He is a fellow of the Nigerian Institute of Structural Engineers and a retired staff of one of the leading banks in Nigeria.',
    additionalDescription: [
      'He is married to Mrs Bola Oshinyemi (nee Philips) and they have two miracle children: Iyin and Opeyemi.',
    ],
    imageLink: require('../../assets/images/pastors/Rev-Oshinyemi.png'),
  },
  {
    name: 'Pastor (Mrs.) Olajumoke Omojuwa',
    position: 'Pastor',
    description:
      'Pastor Olajumoke Oluwadamilola Omojuwa is an entrepreneur par excellence. She holds a HND in Accountancy from Yaba College of Technology, Yaba, Lagos. She is a Chartered Accountant.  She is a Certified Microfinance Banker. An awardee of YOUWIN grant of the Federal Government, Growth and Employment Grant of World Bank and Lagos State APPEALS AGRIC Programme.',
    additionalDescription: [
      'She is a World Bank Scholar and alumni of Enterprise Development Centre (EDC) of the Pan Atlantic University with a certificate in Entrepreneurial Management and also participated in the “Road to Growth” program of Cherrie Blaire organised by EDC.',
      'She has Goggle Certification in Digital Marketing and she is a Graduate Mentee of the Lagos Chamber of Commerce and Industry. She is Currently the Managing Director of Spices Confectionery Ltd and Jutomex Properties Ltd.',
      'Olajumoke is the Head of Maturity Ministry of The Father’s House Church.  She is married to Reverend Oluwatomisin Omojuwa and they are blessed with 3 God fearing children.',
    ],
    imageLink: require('../../assets/images/pastors/Rev-Mrs-Omojuwa.png'),
    facebookLink: 'https://www.facebook.com/profile.php?id=100004882126943',
    linkedinLink:
      'https://www.linkedin.com/in/olajumoke-omojuwa-hnd-mcib-fca-55a03b24b/',
  },
  {
    name: 'Pastor Sola Ewedemi',
    position: 'Pastor',
    description:
      'Pastor Sola Ewedemi is a graduate of Biochemistry from the Obafemi Awolowo University, Ile-Ife. Sola’s passion is to serve in any local assembly in the body of Christ that he finds himself and to this end, he has served at various roles in the body of Christ. He believes every believer should be given to service unconditionally and sacrificially.',
    additionalDescription: [
      'Although at the early stage of his salvation, he served diligently in the Music department, as he grew in the faith, his desire has been towards diligent study of the Word. He has a strong passion to communicate the Word of God to all around him. Studying and teaching the Word are his topmost interest.',
      'Since 1997, he believes the best place to communicate the word of God is the Children and Teens Church and he has remained there till now. Currently, he is the Pastor of the Teens Church of The Father’s House where he was ordained into the office in the year 2015. He is also the Supervising Minister of the Church’s Multimedia Department.',
      'He is married to Sade, a pediatrician, and they are blessed with two lovely children – Omobolaoluwa and Olaoluwakiitan.',
    ],
    imageLink: require('../../assets/images/pastors/pastor-ewedemi.jpg'),
    facebookLink: 'https://www.facebook.com/sola.ewedemi',
  },
  {
    name: 'Pastor Fidelis Okonicha',
    position: 'Pastor',
    imageLink: require('../../assets/images/pastors/Pas-Fidelis-Okonicha.png'),
    description:
      'Pastor Fidelis Ogoh Okonicha is an Electrical Electronics Engineering graduate of the prestigious University of Benin, Edo State. Popularly known as the ‘Aluta Pastor’ in his days on campus because of his involvement in politics to ensure believers vie for and served in the executive arm of the Students Union Government, SUG. He was in the forefront of the formations of the Christian Leadership Foundation, CLEF, the political arm of the Christian Community on Campus, CCC, and was her Founding Pastor and the Conference of Nigerian Christian Engineering Students, CONCES, where he was a one-time president.',
    additionalDescription: [
      'He had a stint at Chevron Nigeria Limited, headquarters, for over 9 years as a contract staff from G4S before venturing into the fashion business and teaching  mathematics at all levels. Pastor Fidelis has a passion to preach the Gospel in season and out of season and his outspoken and super active nature is a plus for him as he shares his faith in the power of the Word of God to settle all of life’s challenges.',
      'He is happily married to the beautiful and industrious Ayomikun, popularly known as Lolo, and they make their home at Alagbole, Lagos State. He is presently serving as the Supervising Minister of the Department of Evangelism and Missions of the Father’s House Church.',
    ],
    facebookLink: 'https://www.facebook.com/fidelis.okonicha.5/',
    instagramLink: 'https://www.instagram.com/fidelisokonicha/',
  },
];

export default pastorsData;

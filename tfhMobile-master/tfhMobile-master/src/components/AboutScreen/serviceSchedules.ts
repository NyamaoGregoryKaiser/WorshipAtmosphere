interface ItemType {
  heading: string;
  content: string[];
}

const serviceSchedules: ItemType[] = [
  {
    heading: 'Sunday Services',
    content: [
      'First Service : 7:00 am - 8:00 am',
      'Second Service : 8:30 am - 10:00 am',
      'Third Service : 10:30 am - 12:00 pm',
      'Youth Church : 8:30 am - 10:00 am',
      'Teens Church : 10:30 am - 12:00 pm',
    ],
  },
  {
    heading: 'Tuesday Service',
    content: ['Mid-Week Service : 6:45 pm - 8:15 pm'],
  },
  {
    heading: 'Thursday Service',
    content: ['Divine Intervention Service : 8:00 am - 10:00 am'],
  },
];

export default serviceSchedules;

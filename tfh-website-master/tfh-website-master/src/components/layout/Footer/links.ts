interface SubLinks {
  name: string;
  destination: string;
  external?: boolean;
}

interface Link {
  heading: { title: string; subLinks: SubLinks[] };
}

const links: Link[] = [
  {
    heading: {
      title: 'About',
      subLinks: [
        { name: 'Welcome', destination: '/about' },
        { name: 'Our History', destination: '/about#history' },
        { name: 'Our Pastors', destination: '/about#pastors' },
        { name: 'Statement Of Faith', destination: '/about#faith' },
      ],
    },
  },
  {
    heading: {
      title: 'Connect',
      subLinks: [
        { name: 'Location', destination: '/church-locations' },
        { name: "worship atmosphere Menu", destination: '/devotional' },
                { name: 'Join Online', destination: '/media' },
      ],
    },
  },
  {
    heading: {
      title: 'Media',
      subLinks: [
        { name: 'Join Online', destination: '/media' },
        { name: 'Sermons', destination: '/resources' },
      ],
    },
  },
];

export default links;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SESSION_NAME: 'TFH Web',
    SESSION_KEY: 'TFH_WEB_USER',
    //API_URL: 'https://www.goldenogbeka.com/api/v2',
    API_URL: 'http://localhost:5000/v2',
    API_KEY: 'TFH_ADMIN',
    YOUTUBE_API_KEY: 'AIzaSyDc4U4u3jPrGhwSqu1ff2hwU-T1owb2AbY',
    YOUTUBE_UPLOAD_KEY: 'UUMyWPXBz3l_MwM85PhQDGuA',
    YOUTUBE_CHANNEL_ID: 'UCMyWPXBz3l_MwM85PhQDGuA',//UCqD7K-yIH-iiKp1-hmPflvg
  },
  images: {
    domains: ['i.ytimg.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
//what
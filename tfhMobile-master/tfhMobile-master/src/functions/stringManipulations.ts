export const formatNumberToNaira = (number: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(Number(number));
};

export const capitalize = (phrase: string) => {
  return phrase.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
};

export const getYoutubeLink = (videoId: string) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

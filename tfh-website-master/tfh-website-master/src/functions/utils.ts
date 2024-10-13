export const copyToClipboard = (item: string) => {
  return window?.navigator?.clipboard?.writeText(item || '');
};

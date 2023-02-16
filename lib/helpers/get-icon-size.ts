export const getIconSize = (size: number | string | undefined, fallback: string) => {
  if (typeof size === 'number') {
    return `${size}rem`;
  }

  if (typeof size === 'string') {
    return size;
  }

  return fallback;
};

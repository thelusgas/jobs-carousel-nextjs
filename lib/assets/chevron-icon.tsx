import { getIconSize } from '@helpers/get-icon-size';
import { Icon } from '@interfaces/client';

type ChevronIconProps = Icon & {
  direction?: 'up' | 'down' | 'right' | 'left';
};

export function ChevronIcon({ size, color, className, direction }: ChevronIconProps) {
  const rotate = setRotate(direction ?? 'left');

  return (
    <svg
      width={getIconSize(size, '1.5rem')}
      height={getIconSize(size, '1.5rem')}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color ?? 'currentColor'}
      className={className}
      style={{
        transform: rotate,
      }}
    >
      <path d="M6.793 12l7-7h1.414l-7 7 7 7h-1.414z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
}

const setRotate = (direction: 'up' | 'down' | 'right' | 'left') => {
  if (direction === 'up') {
    return 'rotate(90deg)';
  }
  if (direction === 'right') {
    return 'rotate(180deg)';
  }
  if (direction === 'down') {
    return 'rotate(270deg)';
  }
  return 'rotate(0deg)';
};

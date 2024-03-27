import type { IButtonLink } from './types';

import styles from './ButtonLink.module.scss';

const ButtonLink = ({
  children,
  onClick,
  type = 'button',
  className,
}: IButtonLink) => {
  return (
    <button
      className={className ? `${styles.btn} ${className}` : `${styles.btn}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLink;

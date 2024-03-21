import { RefObject } from 'react';

import styles from './Card.module.scss';

interface ICard {
  children: React.ReactNode;
  refValue?: RefObject<HTMLDivElement>;
  className?: string;
}

const Card = ({ children, className, refValue, ...props }: ICard) => {
  const classes = className ? `${styles.card} ${className}` : styles.card;

  return (
    <div className={classes} ref={refValue} {...props}>
      {children}
    </div>
  );
};

export default Card;

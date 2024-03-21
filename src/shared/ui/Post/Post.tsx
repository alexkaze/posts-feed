import { RefObject } from 'react';

import { IPost } from './types';

import styles from './Post.module.scss';

interface Post extends IPost {
  className?: string;
  refValue?: RefObject<HTMLParagraphElement>;
  isOverflow?: boolean;
  children?: React.ReactNode;
}

const Post = ({
  id,
  title,
  body,
  refValue,
  className,
  isOverflow,
  children,
}: Post) => {
  return (
    <article
      className={className ? `${styles.post} ${className}` : `${styles.post}`}
    >
      <header>
        <h2 className={styles['post__title']}>
          {id}. {title}
        </h2>
      </header>

      <main>
        <p className={isOverflow ? styles.overflow : ''} ref={refValue}>
          {body + body + body}
        </p>

        {children}
      </main>
    </article>
  );
};

export default Post;

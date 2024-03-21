import { RefObject } from 'react';
import { Link } from 'react-router-dom';

import { IPost } from './types';

import styles from './Post.module.scss';

interface Post extends IPost {
  isCompact?: boolean;
  refValue?: RefObject<HTMLParagraphElement>;
  isOverflow?: boolean;
}

const Post = ({ id, title, body, refValue, isCompact, isOverflow }: Post) => {
  const postStyle = isCompact
    ? `${styles.post} ${styles['post--compact']}`
    : `${styles.post}`;

  const textStyle = !isOverflow
    ? `${styles['post__text']}`
    : `${styles['post__text']} ${styles.overflow}`;

  return (
    <article className={postStyle}>
      <header>
        <h2 className={styles['post__title']}>
          {id}. {title}
        </h2>
      </header>

      <main>
        <p className={textStyle} ref={refValue}>
          {body + body + body}
        </p>

        {isOverflow && (
          <Link
            className={styles['post__link']}
            to={`/posts/${id}`}
            state={{ id, title, body }}
          >
            Просмотр &#8594;
          </Link>
        )}
      </main>
    </article>
  );
};

export default Post;

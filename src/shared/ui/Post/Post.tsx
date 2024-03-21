import { RefObject } from 'react';
// import { Link } from 'react-router-dom';

import { IPost } from './types';

import styles from './Post.module.scss';

interface Post extends IPost {
  refValue?: RefObject<HTMLParagraphElement>;
  isOverflow?: boolean;
}

const Post = ({ id, title, body, refValue, isOverflow }: Post) => {
  const textStyle = !isOverflow
    ? `${styles['post__text']}`
    : `${styles['post__text']} ${styles.overflow}`;

  return (
    <article className={styles.post}>
      <header>
        <h2 className={styles['post__title']}>
          {id}. {title}
        </h2>
      </header>

      <main>
        <p className={textStyle} ref={refValue}>
          {body + body}
        </p>

        {isOverflow && (
          // <Link to={`/posts/${id}`} state={{ id, title, body }}>
          //   Просмотр
          // </Link>
          <div>Просмотр</div>
        )}
      </main>
    </article>
  );
};

export default Post;

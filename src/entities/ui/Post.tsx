import { IPost } from '@/shared/models/types';

import styles from './Post.module.scss';

const Post = ({ id, title, body }: IPost) => {
  return (
    <article className={styles.post}>
      <header>
        <h2 className={styles['post__title']}>
          {id}. {title}
        </h2>
      </header>

      <main>{body}</main>
    </article>
  );
};

export default Post;

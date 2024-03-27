import { IPost } from './types';

import styles from './Post.module.scss';

interface Post extends IPost {
  classes?: string;
  textLimit?: number;
  link?: React.ReactNode;
}

const Post = ({ id, title, body, classes, textLimit, link }: Post) => {
  let clientText = body + body + body; // for UI
  if (textLimit) clientText = clientText.substring(0, textLimit - 10) + '...';

  return (
    <article
      className={classes ? `${styles.post} ${classes}` : `${styles.post}`}
    >
      <header>
        <h2 className={styles['post__title']}>
          {id}. {title}
        </h2>
      </header>

      <main>
        <p>
          {clientText}
          {link && link}
        </p>
      </main>
    </article>
  );
};

export default Post;

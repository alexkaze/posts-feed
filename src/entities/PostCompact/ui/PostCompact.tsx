import { Link } from 'react-router-dom';
import { IPost, Post } from '@/shared/ui/Post';

import styles from './PostCompact.module.scss';

const PostCompact = ({ id, title, body }: IPost) => {
  return (
    <Post
      id={id}
      classes={styles.compact}
      title={title}
      body={body}
      textLimit={210}
      link={
        <Link className={styles.link} to={`/posts/${id}`}>
          Читать
        </Link>
      }
    ></Post>
  );
};

export default PostCompact;

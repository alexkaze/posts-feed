import { Link, useLocation } from 'react-router-dom';

import { IPost } from '@/shared/ui/Post';
import { Card } from '@/shared/ui/Card';
import { Post } from '@/shared/ui/Post';

import styles from './PostPage.module.scss';

const PostPage = () => {
  const { state }: { state: IPost } = useLocation();
  const { id, title, body } = state;

  return (
    <Card className={styles.post}>
      <Link className={styles.btn} to="/">
        &#8592; Назад
      </Link>
      <Post id={id} title={title} body={body} />
    </Card>
  );
};

export default PostPage;

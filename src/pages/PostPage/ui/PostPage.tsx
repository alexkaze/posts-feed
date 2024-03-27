import { Link, useParams } from 'react-router-dom';

import { useGetPostByIdQuery } from '../api';

import { Card } from '@/shared/ui/Card';
import { Post } from '@/shared/ui/Post';

import styles from './PostPage.module.scss';

const PostPage = () => {
  const { postId } = useParams();

  const { data: post, error, isLoading } = useGetPostByIdQuery(+postId!);

  return (
    <Card className={styles.post}>
      <Link className={styles.btn} to="/">
        &#8592; Назад
      </Link>
      {error && <h2>Error occured</h2>}
      {isLoading && <h2>Loading...</h2>}

      {post && <Post id={post.id} title={post.title} body={post.body} />}
    </Card>
  );
};

export default PostPage;

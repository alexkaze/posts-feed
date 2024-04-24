import { useNavigate, useParams } from 'react-router-dom';

import { useGetPostByIdQuery } from '../api';

import { PostError } from '@/widgets/PostError';
import { Card, Loading, ButtonLink, Post } from '@/shared/ui';

import styles from './PostPage.module.scss';

const PostPage = () => {
  const navigate = useNavigate();

  const { postId } = useParams();
  const { data: post, error, isLoading } = useGetPostByIdQuery(+postId!);

  const content = (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ButtonLink onClick={() => navigate(-1)}>&#8592; Back</ButtonLink>
          {post && <Post id={post.id} title={post.title} body={post.body} />}
        </>
      )}
    </>
  );

  return (
    <Card className={styles.post}>
      {error && 'status' in error ? (
        <PostError status={error.status as number} />
      ) : (
        content
      )}
    </Card>
  );
};

export default PostPage;

import { useNavigate } from 'react-router-dom';

import type { IPostError } from '../model';

import { navigationMap } from '@/shared/model';
import { Error, ButtonLink } from '@/shared/ui';

import styles from './PostError.module.scss';

const PostError = ({ status }: IPostError) => {
  const navigate = useNavigate();

  const errorText =
    status === 404
      ? 'The post does not exist or you simply entered the page address incorrectly.'
      : 'An unexpected error has occured while fetching the post.';

  return (
    <Error>
      <h2>Post not found.</h2>
      <p>{errorText}</p>
      <ButtonLink
        className={styles.btn}
        onClick={() => navigate(navigationMap.home)}
      >
        Go to home page
      </ButtonLink>
    </Error>
  );
};

export default PostError;

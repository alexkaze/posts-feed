import { useNavigate } from 'react-router-dom';

import { setCurrentPostId } from '../model';

import { useAppDispatch } from '@/app/redux-hooks';
import { navigationMap } from '@/shared/model';
import { IPost, Post } from '@/shared/ui/Post';

import styles from './PostCompact.module.scss';

const PostCompact = ({ id, title, body }: IPost) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const btnLinkHandler = () => {
    dispatch(setCurrentPostId(id));
    navigate(`${navigationMap.posts}/${id}`);
  };

  return (
    <Post
      id={id}
      classes={styles.compact}
      title={title}
      body={body}
      textLimit={210}
      link={
        <button className={styles.link} onClick={btnLinkHandler}>
          Читать
        </button>
      }
    ></Post>
  );
};

export default PostCompact;

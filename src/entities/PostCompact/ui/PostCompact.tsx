import { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import { IPost, Post } from '@/shared/ui/Post';

import styles from './PostCompact.module.scss';

const PostCompact = ({ id, title, body }: IPost) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const fixedPostHeight = 120;

  useLayoutEffect(() => {
    const scrollHeight = textRef.current!.scrollHeight;
    if (scrollHeight > fixedPostHeight) setIsOverflow(true);
  }, [isOverflow]);

  return (
    <Post
      id={id}
      className={styles.compact}
      title={title}
      body={body}
      refValue={textRef}
      isOverflow={isOverflow}
    >
      {isOverflow && (
        <Link
          className={styles.link}
          to={`/posts/${id}`}
          state={{ id, title, body }}
        >
          Просмотр &#8594;
        </Link>
      )}
    </Post>
  );
};

export default PostCompact;

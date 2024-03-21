import { useEffect, useRef, useState } from 'react';
import { useGetPostsQuery } from '../api';

import { Card } from '@/shared/ui/Card';
import { PostCompact } from '@/entities/PostCompact';

import styles from './PostsList.module.scss';

const PostsList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [limitPosts, setLimitPosts] = useState(7);
  const postsListRef = useRef<HTMLDivElement>(null);

  const {
    data = [],
    error,
    isLoading,
    isFetching,
  } = useGetPostsQuery({
    start: startIndex,
    limit: limitPosts,
  });

  useEffect(() => {
    if (data.length === 0) return;

    const postsElements = postsListRef.current!.querySelectorAll('article');
    const lastPostEl = postsElements[postsElements.length - 1];

    const options = { threshold: 1 };

    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.intersectionRatio < options.threshold) return;

        setLimitPosts(prevState => prevState + 5);

        observer.unobserve(entry.target);
      },
      options,
    );

    observer.observe(lastPostEl);
  }, [data]);

  return (
    <Card className={styles.posts} refValue={postsListRef}>
      {error && <h2>Error occured</h2>}
      {isLoading && <h2>Loading...</h2>}

      {data.map(post => (
        <PostCompact
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}

      {!isLoading && isFetching && <h2>Loading...</h2>}
    </Card>
  );
};

export default PostsList;

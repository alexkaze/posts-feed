import { useEffect, useRef, useState } from 'react';
import { useGetPostsQuery } from '@/app/postsApi';

import Post from '@/entities/ui/Post';

import styles from './PostsList.module.scss';

const PostsList = () => {
  const [limitPosts, setLimitPosts] = useState(7);
  const postsListRef = useRef<HTMLDivElement>(null);

  const {
    data = [],
    error,
    isLoading,
  } = useGetPostsQuery({
    start: 0,
    limit: limitPosts,
  });

  useEffect(() => {
    if (data.length === 0) return;

    const postsElements = postsListRef.current!.querySelectorAll('article');
    const lastPostEl = postsElements[postsElements.length - 1];

    const options = { threshold: 0.5 };

    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.intersectionRatio < options.threshold) return;

        console.log(entry);

        setLimitPosts(prevState => prevState + 5);

        observer.unobserve(entry.target);
      },
      options,
    );

    observer.observe(lastPostEl);
  }, [data]);

  return (
    <div className={styles.posts} ref={postsListRef}>
      {error && <h2>Error occured</h2>}
      {isLoading && <h2>Loading...</h2>}

      {data.map(post => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostsList;

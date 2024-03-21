import { useEffect, useRef, useState } from 'react';
import { useGetPostsQuery } from '../api';

import { Virtuoso } from 'react-virtuoso';
import { Card } from '@/shared/ui/Card';
import { PostCompact } from '@/entities/PostCompact';

import styles from './PostsList.module.scss';

const PostsList = () => {
  const [limitPosts, setLimitPosts] = useState(7);
  const postsListRef = useRef<HTMLDivElement>(null);

  const { data: fetchedPosts = [], error } = useGetPostsQuery({
    start: 0,
    limit: limitPosts,
  });

  useEffect(() => {
    const containerEl = document.querySelector(
      '[data-test-id="virtuoso-item-list"]',
    );

    containerEl?.classList.add(styles.list);
  }, []);

  return (
    <Card className={styles.card} refValue={postsListRef}>
      {error && <h2 className={styles.error}>Error occured</h2>}

      <Virtuoso
        data={fetchedPosts}
        totalCount={limitPosts}
        endReached={() =>
          setLimitPosts(prevState =>
            prevState + 7 > 100 ? 100 : prevState + 7,
          )
        }
        components={{
          Footer: () => {
            if (error) return;
            const endLimit = limitPosts === 100;

            return (
              <h2
                className={
                  endLimit
                    ? `${styles.loading} ${styles.endlist}`
                    : styles.loading
                }
              >
                {endLimit ? '' : 'Loading...'}
              </h2>
            );
          },
        }}
        itemContent={index => {
          const post = fetchedPosts[index];

          return (
            <PostCompact
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        }}
      />
    </Card>
  );
};

export default PostsList;

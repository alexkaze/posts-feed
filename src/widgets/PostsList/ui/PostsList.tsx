import { useEffect, useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { useGetPostsQuery } from '../api';

import { Card } from '@/shared/ui/Card';
import { Error } from '@/shared/ui/Error';
import { Loading } from '@/shared/ui/Loading';
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
    ) as HTMLElement;

    containerEl.style.padding = '0 1rem';

    containerEl?.classList.add(styles.list);
  }, []);

  return (
    <Card className={styles.card} refValue={postsListRef}>
      {error && (
        <div className={styles.error}>
          <Error>
            <h2>Posts not found!</h2>
            <p>Error occured while posts fetching. Please try later.</p>
          </Error>
        </div>
      )}

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
              <div className={styles.loading}>
                {endLimit ? '' : <Loading />}
              </div>
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

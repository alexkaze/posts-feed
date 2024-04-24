import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux-hooks';
import { Virtuoso } from 'react-virtuoso';

import { useGetPostsQuery } from '../api';
import { increasePostsLimit } from '../model';

import { PostCompact } from '@/entities/PostCompact';
import { Card } from '@/shared/ui/Card';
import { Error } from '@/shared/ui/Error';
import { Loading } from '@/shared/ui/Loading';

import styles from './PostsList.module.scss';

const PostsList = () => {
  const { postsLimit } = useAppSelector(state => state.posts);
  const { currentId } = useAppSelector(state => state.postCompact);
  const dispatch = useAppDispatch();
  const postsListRef = useRef<HTMLDivElement>(null);
  const { data: fetchedPosts = [], error } = useGetPostsQuery({
    start: 0,
    limit: postsLimit,
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
        className={styles.scroller}
        data={fetchedPosts}
        totalCount={postsLimit}
        endReached={() => dispatch(increasePostsLimit())}
        initialTopMostItemIndex={currentId - 1 < 0 ? currentId : currentId - 1}
        components={{
          Footer: () => {
            if (error) return;
            const endLimit = postsLimit === 100;

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

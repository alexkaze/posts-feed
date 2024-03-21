import { useState, useRef, useLayoutEffect } from 'react';

import { IPost, Post } from '@/shared/ui/Post';

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
      title={title}
      body={body}
      refValue={textRef}
      isCompact={true}
      isOverflow={isOverflow}
    />
  );
};

export default PostCompact;

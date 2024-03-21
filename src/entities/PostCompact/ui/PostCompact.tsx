import { useState, useRef, useLayoutEffect } from 'react';

import { IPost, Post } from '@/shared/ui/Post';

const PostCompact = ({ id, title, body }: IPost) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const clientHeight = textRef.current!.clientHeight;
    const scrollHeight = textRef.current!.scrollHeight;
    if (clientHeight < scrollHeight) setIsOverflow(true);
  }, [isOverflow]);

  return (
    <Post
      id={id}
      title={title}
      body={body}
      refValue={textRef}
      isOverflow={isOverflow}
    />
  );
};

export default PostCompact;

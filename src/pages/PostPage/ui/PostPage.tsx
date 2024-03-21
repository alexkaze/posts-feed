import { useLocation } from 'react-router-dom';

import { IPost } from '@/shared/ui/Post';
import { Post } from '@/shared/ui/Post';

const PostPage = () => {
  const { state }: { state: IPost } = useLocation();
  const { id, title, body } = state;

  return (
    <div>
      <Post id={id} title={title} body={body} />
    </div>
  );
};

export default PostPage;

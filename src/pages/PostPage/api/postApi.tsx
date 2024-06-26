import { postsApi } from '@/widgets/PostsList';

import { IPost } from '@/shared/ui';

const extendedApi = postsApi.injectEndpoints({
  endpoints: build => ({
    getPostById: build.query<IPost, number>({
      query: id => `posts/${id}`,
    }),
  }),
});

export const { useGetPostByIdQuery } = extendedApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostsResponse } from '@/widgets/PostsList';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const postsApi = createApi({
  reducerPath: 'postsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: builder => ({
    getPosts: builder.query<PostsResponse, { start: number; limit: number }>({
      query: ({ start, limit }) => `posts?_start=${start || 0}&_limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;

import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from './layouts';
import { MainPage } from '@/pages/MainPage';
import { PostPage } from '@/pages/PostPage';
import { ErrorPage } from '@/pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },

      {
        path: 'posts',
        element: <MainPage />,
      },

      {
        path: 'posts/:postId',
        element: <PostPage />,
      },
    ],
  },
]);

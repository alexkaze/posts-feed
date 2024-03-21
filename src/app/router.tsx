import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from './layouts';
import { MainPage } from '@/pages/MainPage';
import { PostPage } from '@/pages/PostPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },

  {
    path: 'posts/:postId',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <PostPage />,
      },
    ],
  },
]);

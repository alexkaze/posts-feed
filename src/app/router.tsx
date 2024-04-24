import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from './layouts';

import { MainPage } from '@/pages/MainPage';
import { PostPage } from '@/pages/PostPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { navigationMap } from '@/shared/model';

export const router = createBrowserRouter([
  {
    path: navigationMap.home,
    errorElement: <ErrorPage />,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },

      {
        path: navigationMap.posts,
        element: <MainPage />,
      },

      {
        path: navigationMap.postById,
        element: <PostPage />,
      },
    ],
  },
]);

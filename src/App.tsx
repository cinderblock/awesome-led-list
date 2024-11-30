import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import './App.css';
import Layout from './Layout';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.tsx',
    children: [
      {
        path: 'a',
        lazy: () => import('./pages/a'),
      },
      {
        index: true,
        Component: React.lazy(() => import('./pages/index')),
      },
      {
        path: 'nest/:b',
        lazy: async () => {
          const Component = await import('./pages/nest/[b]');
          return { Component };
        },
        // To determine which paths will be pre-rendered
        getStaticPaths: () => ['nest/b1', 'nest/b2'],
      },
    ],
  },
];

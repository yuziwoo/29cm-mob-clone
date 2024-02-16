import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

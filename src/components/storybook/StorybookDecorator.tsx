import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface StorybookDecoratorProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const StorybookDecorator = ({
  children,
  style = {
    width: '100%',
    padding: '0 16px',
    maxWidth: '550px',
    margin: 'auto',
    position: 'relative',
  },
}: StorybookDecoratorProps) => {
  return (
    <div style={style}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <GlobalStyle />
            {children}
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default StorybookDecorator;

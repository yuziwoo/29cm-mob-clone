import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../../styles/GlobalStyle';
import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import IconLike from '../../icons/IconLike';
import { useCallback, useState } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ProductLikes = ({ isReady }: { isReady: boolean }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = useCallback(() => {
    setLiked((prevLiked) => !prevLiked);
  }, [setLiked]);

  if (!isReady) {
    return (
      <div style={{ width: '32px', height: '32px' }}>
        <IconLike isLiked={liked} />
      </div>
    );
  }

  return (
    <div onClick={toggleLike} style={{ width: '32px', height: '32px' }}>
      <IconLike isLiked={liked} />
    </div>
  );
};

const meta = {
  title: 'Product/ProductLikes',
  component: ProductLikes,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '0 16px', maxWidth: '550px', margin: 'auto' }}>
        <BrowserRouter>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle />
              <Story />
            </QueryClientProvider>
          </RecoilRoot>
        </BrowserRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductLikes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isReady: true,
  },
};

export const ApiNotReady: Story = {
  args: {
    isReady: false,
  },
};

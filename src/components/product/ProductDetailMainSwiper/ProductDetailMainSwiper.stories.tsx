import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../../styles/GlobalStyle';
import { Meta, StoryObj } from '@storybook/react';
import ProductDetailMainSwiper from './ProductDetailMainSwiper';

const meta = {
  title: 'ProductDetail/ProductDetailMainSwiper',
  component: ProductDetailMainSwiper,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '0 16px', maxWidth: '550px', margin: 'auto' }}>
        <BrowserRouter>
          <RecoilRoot>
            <GlobalStyle />
            <Story />
          </RecoilRoot>
        </BrowserRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductDetailMainSwiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbs: ['../img/products/p1001-1.jpg', '../img/products/p1001-2.jpg'],
  },
};

export const OneImg: Story = {
  args: {
    thumbs: ['../img/products/p1001-1.jpg'],
  },
};

export const FiveImg: Story = {
  args: {
    thumbs: [
      '../img/products/p1001-1.jpg',
      '../img/products/p1001-2.jpg',
      '../img/products/p1002-1.jpg',
      '../img/products/p1002-2.jpg',
      '../img/products/p1003-1.jpg',
    ],
  },
};

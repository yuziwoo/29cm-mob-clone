import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../styles/GlobalStyle';
import ProductDetailsImg from './ProductDetailsImg';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'Product/ProductDetailsImg',
  component: ProductDetailsImg,
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
} satisfies Meta<typeof ProductDetailsImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgURL: mockProduct.product.imgURL,
  },
};

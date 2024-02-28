import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import Footer from './Footer';
import { ROUTE_PATH } from '../../../constants/path';

const meta = {
  title: 'common/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative', height: '300px' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstPath: '',
  },
};

export const ProductDetailPage: Story = {
  args: {
    firstPath: ROUTE_PATH.productDetail.split('/')[1],
  },
};

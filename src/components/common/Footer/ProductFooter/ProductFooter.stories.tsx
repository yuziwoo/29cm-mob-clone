import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../../storybook/StorybookDecorator';
import ProductFooter from './ProductFooter';
import { mockProduct } from '../../../../mock/product';

const meta = {
  title: 'common/Footer/ProductFooter',
  component: ProductFooter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative', height: '150px' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: mockProduct.productId },
};

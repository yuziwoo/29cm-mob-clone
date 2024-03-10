import { Meta, StoryObj } from '@storybook/react';
import ProductFooterModal from './ProductFooterModal';
import StorybookDecorator from '../../../../storybook/StorybookDecorator';
import { mockProduct } from '../../../../../mock/product';

const meta = {
  title: 'common/Footer/ProductFooter/ProductFooterModal',
  component: ProductFooterModal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductFooterModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { productId: mockProduct.productId, onRequestClose: () => {} },
};

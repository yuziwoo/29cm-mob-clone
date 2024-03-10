import { Meta, StoryObj } from '@storybook/react';
import BrandProductList from './BrandProductList';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockBrandResult } from '../../../mock/search';

const meta = {
  title: 'brand/BrandProductList',
  component: BrandProductList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof BrandProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandId: mockBrandResult.id,
  },
};

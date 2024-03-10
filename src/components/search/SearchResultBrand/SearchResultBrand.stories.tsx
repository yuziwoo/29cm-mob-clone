import { Meta, StoryObj } from '@storybook/react';
import SearchResultBrand from './SearchResultBrand';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockBrandResult } from '../../../mock/search';

const meta = {
  title: 'search/SearchResultBrand',
  component: SearchResultBrand,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof SearchResultBrand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { brand: mockBrandResult },
};

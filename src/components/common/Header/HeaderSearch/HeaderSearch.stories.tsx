import { Meta, StoryObj } from '@storybook/react';
import HeaderSearch from './HeaderSearch';
import StorybookDecorator from '../../../storybook/StorybookDecorator';

const meta = {
  title: 'common/Header/HeaderSearch',
  component: HeaderSearch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof HeaderSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

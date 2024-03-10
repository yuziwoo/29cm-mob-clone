import { Meta, StoryObj } from '@storybook/react';
import HeaderBackButton from './HeaderBackButton';
import StorybookDecorator from '../../../storybook/StorybookDecorator';

const meta = {
  title: 'common/Header/HeaderBackButton',
  component: HeaderBackButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof HeaderBackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

import { Meta, StoryObj } from '@storybook/react';
import CreateAccountForm from './CreateAccountForm';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'join/CreateAccountForm',
  component: CreateAccountForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof CreateAccountForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { redirectPath: '' },
};

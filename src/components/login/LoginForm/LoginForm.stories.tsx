import { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'login/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { redirectPath: '' },
};

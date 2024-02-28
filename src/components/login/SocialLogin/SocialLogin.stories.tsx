import { Meta, StoryObj } from '@storybook/react';
import SocialLogin from './SocialLogin';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'login/SocialLogin',
  component: SocialLogin,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof SocialLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { redirectPath: '' },
};

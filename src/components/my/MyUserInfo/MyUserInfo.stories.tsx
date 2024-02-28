import StorybookDecorator from '../../storybook/StorybookDecorator';
import MyUserInfo from './MyUserInfo';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'my/MyUserInfo',
  component: MyUserInfo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MyUserInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      uid: '',
      displayName: '아이유',
      email: '',
      photoURL: null,
      providerId: '',
    },
  },
};

export const NoUserName: Story = {
  args: {
    user: {
      uid: '',
      displayName: null,
      email: '',
      photoURL: null,
      providerId: '',
    },
  },
};

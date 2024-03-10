import { Meta, StoryObj } from '@storybook/react';
import MyEditInfoList from './MyEditInfoList';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'myEditInfo/MyEditInfoList',
  component: MyEditInfoList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MyEditInfoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '계정 이름',
    email: 'email@test.com',
    providerId: 'Google',
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
  },
};

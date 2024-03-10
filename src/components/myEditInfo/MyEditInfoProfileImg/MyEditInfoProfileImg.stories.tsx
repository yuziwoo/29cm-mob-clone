import { Meta, StoryObj } from '@storybook/react';
import MyEditInfoProfileImg from './MyEditInfoProfileImg';
import { userPlaceholder } from '../../../constants/user';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'myEditInfo/MyEditInfoProfileImg',
  component: MyEditInfoProfileImg,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MyEditInfoProfileImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultImg: userPlaceholder.PHOTO_URL,
    changedImg: null,
    onChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => {},
  },
};

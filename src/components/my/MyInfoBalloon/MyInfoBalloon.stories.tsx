import MyInfoBalloon from './MyInfoBalloon';
import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'my/MyInfoBalloon',
  component: MyInfoBalloon,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MyInfoBalloon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import ToggleText from './ToggleText';

const meta = {
  title: 'Product/ToggleText',
  component: ToggleText,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ToggleText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>토글 내용</h1>,
    title: '토글 텍스트',
  },
};

export const InitialShowing: Story = {
  args: {
    children: <h1>토글 내용</h1>,
    title: '기본값 보여주기 설정',
    initialShowing: true,
  },
};

export const Skeleton: Story = {
  args: {
    children: <h1>토글 내용</h1>,
    title: undefined,
  },
};

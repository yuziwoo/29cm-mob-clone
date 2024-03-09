import { Meta, StoryObj } from '@storybook/react';
import ScrollFadeIn from './ScrollFadeIn';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'design/ScrollFadeIn',
  component: ScrollFadeIn,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ScrollFadeIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>페이드인 효과와 함께 나타나다.</h1>,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import TextLineTranslate from './TextLineTranslate';
import StorybookDecorator from '../storybook/StorybookDecorator';

const meta = {
  title: 'feature/TextLineTranslate',
  component: TextLineTranslate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof TextLineTranslate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '텍스트\n줄바꿈\n처리',
  },
};

export const CustomFontStyle: Story = {
  args: {
    text: '텍스트\n줄바꿈\n처리',
    fontStyle: { color: 'pink', fontSize: '18px' },
  },
};

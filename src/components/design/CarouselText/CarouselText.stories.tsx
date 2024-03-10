import { Meta, StoryObj } from '@storybook/react';
import CarouselText from './CarouselText';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { theme } from '../../../styles/theme';

const meta = {
  title: 'desgin/CarouselText',
  component: CarouselText,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof CarouselText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '이것은 캐러셀 테스트 텍스트 입니다.',
    fontStyle: { color: theme.color.BLACK, fontSize: '4.8rem', fontWeight: '700' },
  },
};

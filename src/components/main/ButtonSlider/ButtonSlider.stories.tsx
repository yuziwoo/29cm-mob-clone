import { Meta, StoryObj } from '@storybook/react';
import ButtonSlider from './ButtonSlider';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'main/ButtonSlider',
  component: ButtonSlider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ButtonSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

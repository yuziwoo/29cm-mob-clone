import { Meta, StoryObj } from '@storybook/react';
import MainRecomendedProducts from './MainRecomendedProducts';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'main/MainRecomendedProducts',
  component: MainRecomendedProducts,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MainRecomendedProducts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

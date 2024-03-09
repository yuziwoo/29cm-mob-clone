import { Meta, StoryObj } from '@storybook/react';
import ScrollComeUp from './ScrollComeUp';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'design/ScrollComeUp',
  component: ScrollComeUp,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ScrollComeUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>위로 나타나기</h1>,
  },
};

export const Slower: Story = {
  args: {
    children: <h1>천천히 나타나기</h1>,
    transition: 'all 1.2s',
  },
};

export const Further: Story = {
  args: {
    children: <h1 style={{ paddingBottom: '400px' }}>멀리서 나타나기</h1>,
  },
};

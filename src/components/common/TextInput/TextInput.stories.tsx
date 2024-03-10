import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import TextInput from './TextInput';

const meta = {
  title: 'common/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'random_id_default',
    placeholder: '텍스트를 입력하세요.',
    isValid: null,
  },
};

export const Valid: Story = {
  args: {
    type: 'text',
    id: 'random_id_valid',
    placeholder: '올바른 텍스트 입력의 경우',
    isValid: true,
  },
};

export const Invalid: Story = {
  args: {
    type: 'text',
    id: 'random_id_invalid',
    placeholder: '올바르지 못한 텍스트 입력의 경우',
    isValid: false,
  },
};
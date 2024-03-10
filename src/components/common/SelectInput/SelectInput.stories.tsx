import { Meta, StoryObj } from '@storybook/react';
import SelectInput from './SelectInput';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'common/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: '선택', values: ['옵션1', '옵션2'], onChange: (value: string) => {} },
};

import { Meta, StoryObj } from '@storybook/react';
import NotFoundComponent from './NotFoundComponent';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'common/NotFoundComponent',
  component: NotFoundComponent,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof NotFoundComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

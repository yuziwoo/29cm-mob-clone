import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../../storybook/StorybookDecorator';
import HeaderLogoButton from './HeaderLogoButton';

const meta = {
  title: 'common/Header/HeaderLogoButton',
  component: HeaderLogoButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof HeaderLogoButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstPath: '',
  },
};

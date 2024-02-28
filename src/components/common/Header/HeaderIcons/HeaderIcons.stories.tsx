import type { Meta, StoryObj } from '@storybook/react';
import HeaderIcons from './HeaderIcons';
import { theme } from '../../../../styles/theme';
import StorybookDecorator from '../../../storybook/StorybookDecorator';

const meta = {
  title: 'common/Header/HeaderIcons',
  component: HeaderIcons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ background: 'rgb(0, 0, 0, 0.3)' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof HeaderIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { color: theme.color.WHITE },
};

export const Black: Story = {
  args: { color: theme.color.BLACK },
};

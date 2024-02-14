import type { Meta, StoryObj } from '@storybook/react';
import HeaderIcons from './HeaderIcons';
import GlobalStyle from '../../../../styles/GlobalStyle';

const meta = {
  title: 'common/Header/HeaderIcons',
  component: HeaderIcons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ background: 'grey' }}>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

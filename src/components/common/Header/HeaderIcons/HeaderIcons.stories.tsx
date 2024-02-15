import type { Meta, StoryObj } from '@storybook/react';
import HeaderIcons from './HeaderIcons';
import GlobalStyle from '../../../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../../styles/theme';

const meta = {
  title: 'common/Header/HeaderIcons',
  component: HeaderIcons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <RecoilRoot>
          <div style={{ background: 'rgb(0, 0, 0, 0.3)' }}>
            <GlobalStyle />
            <Story />
          </div>
        </RecoilRoot>
      </BrowserRouter>
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

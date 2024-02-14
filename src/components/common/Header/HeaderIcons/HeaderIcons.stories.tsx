import type { Meta, StoryObj } from '@storybook/react';
import HeaderIcons from './HeaderIcons';
import GlobalStyle from '../../../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'common/Header/HeaderIcons',
  component: HeaderIcons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <RecoilRoot>
          <div style={{ background: 'grey' }}>
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
  args: {},
};

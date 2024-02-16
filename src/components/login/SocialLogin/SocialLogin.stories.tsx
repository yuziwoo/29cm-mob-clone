import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import SocialLogin from './SocialLogin';

const meta = {
  title: 'login/SocialLogin',
  component: SocialLogin,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <BrowserRouter>
          <RecoilRoot>
            <GlobalStyle />
            <Story />
          </RecoilRoot>
        </BrowserRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof SocialLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { redirectPath: '' },
};

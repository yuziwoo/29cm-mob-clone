import { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';

const meta = {
  title: 'login/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '0 16px', maxWidth: '550px', margin: 'auto' }}>
        <BrowserRouter>
          <RecoilRoot>
            <GlobalStyle />
            <Story />
          </RecoilRoot>
        </BrowserRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { redirectPath: '' },
};

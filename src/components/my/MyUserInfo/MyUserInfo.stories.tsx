import MyUserInfo from './MyUserInfo';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../../styles/GlobalStyle';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'my/MyUserInfo',
  component: MyUserInfo,
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
} satisfies Meta<typeof MyUserInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      uid: '',
      displayName: null,
      email: '',
      photoURL: null,
      providerId: '',
    },
  },
};

export const WithUserName: Story = {
  args: {
    user: {
      uid: '',
      displayName: '사용자 이름',
      email: '',
      photoURL: null,
      providerId: '',
    },
  },
};

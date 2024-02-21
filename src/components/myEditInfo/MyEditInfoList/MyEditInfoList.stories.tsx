import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../../styles/GlobalStyle';
import { Meta, StoryObj } from '@storybook/react';
import MyEditInfoList from './MyEditInfoList';

const meta = {
  title: 'myEditInfo/MyEditInfoList',
  component: MyEditInfoList,
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
} satisfies Meta<typeof MyEditInfoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '계정 이름',
    email: 'email@test.com',
    providerId: 'Google',
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
  },
};

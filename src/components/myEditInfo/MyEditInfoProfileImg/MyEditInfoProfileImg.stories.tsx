import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../../styles/GlobalStyle';
import { Meta, StoryObj } from '@storybook/react';
import MyEditInfoProfileImg from './MyEditInfoProfileImg';
import { userPlaceholder } from '../../../constants/user';

const meta = {
  title: 'myEditInfo/MyEditInfoProfileImg',
  component: MyEditInfoProfileImg,
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
} satisfies Meta<typeof MyEditInfoProfileImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultImg: userPlaceholder.PHOTO_URL,
    changedImg: null,
    onChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => {},
  },
};

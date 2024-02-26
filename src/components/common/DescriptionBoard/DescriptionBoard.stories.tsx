import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../../../styles/GlobalStyle';
import { Meta, StoryObj } from '@storybook/react';
import DescriptionBoard from './DescriptionBoard';

const meta = {
  title: 'common/DescriptionBoard',
  component: DescriptionBoard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '0 16px', maxWidth: '550px', margin: 'auto' }}>
        <BrowserRouter>
          <RecoilRoot>
            <GlobalStyle />
            <div style={{ position: 'relative' }}>
              <h1>내용</h1>
              <Story />
            </div>
          </RecoilRoot>
        </BrowserRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof DescriptionBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showDescription: true,
    children: 'description',
  },
};

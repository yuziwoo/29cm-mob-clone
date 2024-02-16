import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import CreateAccountForm from './CreateAccountForm';

const meta = {
  title: 'join/CreateAccountForm',
  component: CreateAccountForm,
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
} satisfies Meta<typeof CreateAccountForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { redirectPath: '' },
};

import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import Header from './Header';
import { headerUI } from '../../../constants/headerUI';

const meta = {
  title: 'common/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative', width: '550px', height: '150px', background: '#F5F5F5' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstPath: 'random page!',
  },
};

export const Hidden: Story = {
  args: {
    firstPath: headerUI.HIDDEN[0],
  },
};

export const Main: Story = {
  args: {
    firstPath: headerUI.MAIN[0],
  },
};

export const OnlyBackButton: Story = {
  args: {
    firstPath: headerUI.ONLY_BACKBUTTON[0],
  },
};

export const BackButtonAndIcons: Story = {
  args: {
    firstPath: headerUI.BACKBUTTON_AND_ICONS[0],
  },
};

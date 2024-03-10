import { Meta, StoryObj } from '@storybook/react';
import MainFooter from './MainFooter';
import StorybookDecorator from '../../../storybook/StorybookDecorator';
import { ROUTE_PATH } from '../../../../constants/path';
import { theme } from '../../../../styles/theme';

const meta = {
  title: 'common/Footer/MainFooter',
  component: MainFooter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative', background: theme.color.FOOTER_BG }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MainFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstPath: '',
  },
};

export const Category: Story = {
  args: {
    firstPath: ROUTE_PATH.category.split('/')[1],
  },
};

export const Search: Story = {
  args: {
    firstPath: ROUTE_PATH.search.split('/')[1],
  },
};

export const Like: Story = {
  args: {
    firstPath: ROUTE_PATH.like.split('/')[1],
  },
};

export const My: Story = {
  args: {
    firstPath: ROUTE_PATH.my.split('/')[1],
  },
};
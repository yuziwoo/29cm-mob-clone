import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import Footer from './Footer';
import { footerUI } from '../../../constants/footerUI';

const meta = {
  title: 'common/Footer',
  component: Footer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative', height: '150px' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstPath: '',
  },
};

export const Hidden: Story = {
  args: {
    firstPath: footerUI.HIDDEN[0],
  },
};

export const ProductDetailPage: Story = {
  args: {
    firstPath: footerUI.PRODUCT[0],
  },
};

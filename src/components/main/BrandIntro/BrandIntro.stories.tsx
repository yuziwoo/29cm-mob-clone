import { Meta, StoryObj } from '@storybook/react';
import BrandIntro from './BrandIntro';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockMainPageBrandIntro } from '../../../mock/mainPage';

const meta = {
  title: 'main/BrandIntro',
  component: BrandIntro,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof BrandIntro>;

export default meta;

type Story = StoryObj<typeof meta>;

const { imgURL, title, text, brandId, productIds } = mockMainPageBrandIntro[0];

export const Default: Story = {
  args: { imgURL, title, text, brandId, productIds },
};

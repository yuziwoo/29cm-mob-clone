import { Meta, StoryObj } from '@storybook/react';
import ProductFooterSelectedOption from './ProductFooterSelectedOption';
import StorybookDecorator from '../../../../storybook/StorybookDecorator';

const meta = {
  title: 'common/Footer/ProductFooter/ProductFooterSelectedOptions',
  component: ProductFooterSelectedOption,
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
} satisfies Meta<typeof ProductFooterSelectedOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '옵션의 이름',
    count: 1,
    onChangeInput: () => {},
    onRemoveOption: () => {},
  },
};

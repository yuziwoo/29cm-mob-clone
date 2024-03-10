import { Meta, StoryObj } from '@storybook/react';
import IconLike from '../../icons/IconLike';
import { useCallback, useState } from 'react';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const ProductLikes = ({ isReady }: { isReady: boolean }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = useCallback(() => {
    setLiked((prevLiked) => !prevLiked);
  }, [setLiked]);

  if (!isReady) {
    return (
      <div style={{ width: '32px', height: '32px' }}>
        <IconLike isLiked={liked} />
      </div>
    );
  }

  return (
    <div onClick={toggleLike} style={{ width: '32px', height: '32px' }}>
      <IconLike isLiked={liked} />
    </div>
  );
};

const meta = {
  title: 'Product/ProductLikes',
  component: ProductLikes,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '하트 버튼을 클릭해보세요.',
  },
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductLikes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isReady: true,
  },
};

export const ApiNotSuccess: Story = {
  args: {
    isReady: false,
  },
};

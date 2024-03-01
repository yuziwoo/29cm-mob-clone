import { ComponentStyle as S } from './ProductFooter.styled';
import ProductLikes from '../../../product/ProductLikes/ProductLikes';
import { theme } from '../../../../styles/theme';
import IconShare from '../../../icons/IconShare';
import { motion } from 'framer-motion';
import CommonButton from '../../motion/CommonButton/CommonButton';
import { useCallback, useState } from 'react';
import ModalBottom from '../../modal/ModalBottom/ModalBottom';
import ProductFooterModal from './ProductFooterModal/ProductFooterModal';

interface ProductFooterProps {
  id: string | undefined;
}

const ProductFooter = ({ id }: ProductFooterProps) => {
  /**
   * ProductDetail 페이지에서 사용할 Footer입니다.
   */

  const [showModal, setShowModal] = useState(false);

  const handleClickShare = () => {
    const url = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        window.alert('페이지 주소가 복사되었습니다.');
      });
    }
  };

  const handleClickBuyButton = async () => {
    if (id === undefined) return;
    setShowModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  if (id === undefined) return <></>;
  return (
    <>
      <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.2 }}>
        <S.Component>
          <S.FlexSpaceBetween>
            <CommonButton>
              <S.LikeButton>
                <ProductLikes productId={id} color={theme.color.WHITE} />
              </S.LikeButton>
            </CommonButton>

            <CommonButton>
              <S.ShareButton onClick={handleClickShare}>
                <IconShare color={theme.color.WHITE} />
              </S.ShareButton>
            </CommonButton>
          </S.FlexSpaceBetween>

          <S.FlexSpaceBetween>
            <CommonButton>
              <S.CartButton>선물하기</S.CartButton>
            </CommonButton>

            <div style={{ borderRight: `1px solid ${theme.color.GRAY7}`, height: '2.4rem' }}></div>

            <CommonButton>
              <S.BuyButton onClick={handleClickBuyButton}>구매하기</S.BuyButton>
            </CommonButton>
          </S.FlexSpaceBetween>
        </S.Component>
      </motion.div>
      <ModalBottom isOpen={showModal} onRequestClose={handleCloseModal}>
        <ProductFooterModal productId={id} />
      </ModalBottom>
    </>
  );
};

export default ProductFooter;

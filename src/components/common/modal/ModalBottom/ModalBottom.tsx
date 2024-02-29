import { useEffect, useState } from 'react';
import { ComponentStyle as S } from './ModalBottom.styled';
import ReactModal from 'react-modal';
import { theme } from '../../../../styles/theme';
import { motion } from 'framer-motion';

interface ModalBottomProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

ReactModal.setAppElement('#root');

const ModalStyle: ReactModal.Styles = {
  overlay: {
    border: 'none',
    left: '50%',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: theme.zIndex.MODAL,
    maxWidth: theme.size.MAX_WIDTH,
    transform: 'translate(-50%, 0)',
    background: 'transparent',
    borderRadius: '0',
  },
  content: {
    border: 'none',
    left: '50%',
    top: '0',
    width: '100%',
    height: '100%',
    maxWidth: theme.size.MAX_WIDTH,
    transform: 'translate(-50%, 0)',
    background: 'transparent',
    borderRadius: '0',
  },
};

const ModalBottom = ({ isOpen, onRequestClose, children }: ModalBottomProps) => {
  /**
   * react-modal과 사용방법이 비슷하며, 모달 뒤에 어두운 배경을 넣고, 배경을 클릭시 모달이 사라지도록 커스텀하였습니다.
   * 컴포넌트 외부에서 isOpen State와 이를 통제하는 onRequestClose 함수를 만들어서 사용하면됩니다.
   */

  const [closeModal, setCloseModal] = useState(isOpen);
  const [dragPoint, setDragPoint] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCloseModal(false);
      return;
    }
    setTimeout(() => {
      setCloseModal(!isOpen);
    }, 250);
  }, [isOpen]);

  const handleRequestClose = () => {
    onRequestClose();
  };

  return (
    <ReactModal isOpen={!closeModal} style={ModalStyle}>
      <S.Component $closeModal={closeModal}>
        <S.Shadow $isOpen={isOpen} onClick={handleRequestClose} />
        <S.ContentWrap $isOpen={isOpen}>
          <motion.div
            drag="y"
            dragConstraints={{ bottom: 0, top: 0 }}
            dragElastic={true}
            dragMomentum={true}
            className="modal-motion-content"
            onDragStart={(event, info) => {
              setDragPoint(info.point.y);
            }}
            onDragEnd={(event, info) => {
              if (info.point.y - dragPoint > 150) {
                handleRequestClose();
              }
              setDragPoint(0);
            }}
          >
            <S.DragBar />
            {children}
          </motion.div>
        </S.ContentWrap>
      </S.Component>
    </ReactModal>
  );
};

export default ModalBottom;

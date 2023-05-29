import { AnimatePresence } from 'framer-motion';
import { Overlay, ModalViewer, Title, ContentWrap } from './Modal.styled';
import { show } from './ModalMotionStyle';
import { useEffect } from 'react';

export const Modal = ({ showModal, children, title, name, closeModal }) => {
  const handleCloseModal = e => {
    if (e.currentTarget !== e.target) {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  return (
    <AnimatePresence>
      {showModal && (
        <Overlay
          onClick={handleCloseModal}
          key="modal"
          initial="hidden"
          animate={'show'}
          exit={'hidden'}
          variants={show.container}
        >
          <ModalViewer variants={show.item}>
            <Title>
              {title}: {name}
            </Title>
            <ContentWrap>{children}</ContentWrap>
          </ModalViewer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

import { AnimatePresence } from 'framer-motion';
import { Overlay, ModalViewer, Title, ContentWrap } from './Modal.styled';
import { show } from './ModalMotionStyle';

export const Modal = ({ showModal, children, title, name, closeModal }) => {
  const handleCloseModal = e => {
    if (e.currentTarget !== e.target) {
      return;
    }
    closeModal();
  };

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
              {title}
              {name}
            </Title>
            <ContentWrap>{children}</ContentWrap>
          </ModalViewer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

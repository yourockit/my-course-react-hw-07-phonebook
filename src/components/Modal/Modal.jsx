import { Overlay, ModalViewer, Title, ContentWrap } from './Modal.styled';

export const Modal = ({ show, children, title, name, closeModal }) => {
  if (!show) {
    return null;
  }

  const handleCloseModal = e => {
    if (e.currentTarget !== e.target) {
      return;
    }
    closeModal();
  };

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalViewer>
        <Title>
          {title}
          {name}
        </Title>
        <ContentWrap>{children}</ContentWrap>
      </ModalViewer>
    </Overlay>
  );
};

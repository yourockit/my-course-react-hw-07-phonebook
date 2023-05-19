import { Overlay, ModalViewer, Title, ContentWrap } from './Modal.styled';

export const Modal = ({ show, children, title, name }) => {
  if (!show) {
    return null;
  }
  return (
    <Overlay>
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

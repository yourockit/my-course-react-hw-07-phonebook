import {
  Overlay,
  ModalViewer,
  Title,
  IconBtnOk,
  IconBtnCancel,
  ContentWrap,
} from './Modal.styled';
import { Button } from 'components/Buttons/Buttons';

export const Modal = ({
  id,
  closeModal,
  closeModalOnBtn,
  deleteContact,
  title,
  name,
}) => {
  return (
    <Overlay onClick={closeModal}>
      <ModalViewer>
        <Title>
          {title}
          {name}
        </Title>
        <ContentWrap>
          <Button type="button" onClick={() => deleteContact(id)}>
            <IconBtnOk />
          </Button>
          <Button type="button" onClick={closeModalOnBtn}>
            <IconBtnCancel />
          </Button>
        </ContentWrap>
      </ModalViewer>
    </Overlay>
  );
};

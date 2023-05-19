import {
  Overlay,
  ModalViewer,
  Title,
  IconBtnOk,
  IconBtnCancel,
  ContentWrap,
} from './Modal.styled';
import { Button } from 'components/Buttons/Buttons';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const Modal = ({ id, closeModal, closeModalOnBtn }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Overlay onClick={closeModal}>
      <ModalViewer>
        <Title>Delete?</Title>
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

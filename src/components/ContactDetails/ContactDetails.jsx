import {
  Details,
  Buttons,
  Phone,
  IconBtnEdit,
  IconBtnDelete,
} from './ContactDetails.styled';
import { Button } from 'components/Buttons/Buttons';
import { Modal } from 'components/Modal/Modal';
import useModal from '../../services/hooks/useModal';
import { ContactDelete } from 'components/ContactDelete/ContactDelete';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactDetails = ({ id, phone, name }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [isShowModal, toogleMOdal] = useModal();

  return (
    <Details>
      <Phone>Tel: {phone}</Phone>
      <Buttons>
        <Button type="button">
          <IconBtnEdit />
        </Button>
        <Button type="button" onClick={toogleMOdal}>
          <IconBtnDelete />
        </Button>
      </Buttons>
      <Modal show={isShowModal} title="Delete " name={name}>
        <ContactDelete
          id={id}
          onCloseButtonClick={toogleMOdal}
          deleteContact={deleteContact}
        />
      </Modal>
    </Details>
  );
};

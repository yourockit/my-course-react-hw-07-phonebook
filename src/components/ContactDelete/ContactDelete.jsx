import { Button } from 'components/Buttons/Buttons';
import { Buttons, IconBtnOk, IconBtnCancel } from './ContactDelete.styled';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { useDispatch } from 'react-redux';
import { addSelectedContactId } from 'redux/selectedContactByIdSlice';

export const ContactDelete = ({ id, toggleModal }) => {
  const dispatch = useDispatch();
  const [deleteContact] = useDeleteContactMutation();
  const onDeleteButtonClick = () => {
    deleteContact(id).then(dispatch(addSelectedContactId(id)));
    toggleModal();
  };

  return (
    <Buttons>
      <Button type="button" onClick={onDeleteButtonClick}>
        <IconBtnOk />
      </Button>
      <Button type="button" onClick={toggleModal}>
        <IconBtnCancel />
      </Button>
    </Buttons>
  );
};

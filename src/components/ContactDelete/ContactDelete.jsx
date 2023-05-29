import { Button } from 'components/Buttons/Buttons';
import { Buttons, IconBtnOk, IconBtnCancel } from './ContactDelete.styled';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';

export const ContactDelete = ({ id, toggleModal }) => {
  const [deleteContact] = useDeleteContactMutation();
  const onDeleteButtonClick = async () => {
    try {
      await deleteContact(id).unwrap().then(toggleModal());
      toast.success('OK');
    } catch (error) {
      toast.error(error.status);
    }
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

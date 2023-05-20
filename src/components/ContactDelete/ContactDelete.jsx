import { Button } from 'components/Buttons/Buttons';
import { Buttons, IconBtnOk, IconBtnCancel } from './ContactDelete.styled';

export const ContactDelete = ({ id, onCloseButtonClick, deleteContact }) => {
  return (
    <Buttons>
      <Button type="button" onClick={() => deleteContact(id)}>
        <IconBtnOk />
      </Button>
      <Button type="button" onClick={onCloseButtonClick}>
        <IconBtnCancel />
      </Button>
    </Buttons>
  );
};

import { Container } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { ModalCreateContact } from './ModalCreateContact/ModalCreateContact';

export const App = () => {
  return (
    <Container>
      <ModalCreateContact />
      <Contacts />
    </Container>
  );
};

import { AppWrap, Container } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { ModalCreateContact } from './ModalCreateContact/ModalCreateContact';

export const App = () => {
  return (
    <AppWrap>
      <Container>
        <ModalCreateContact />
        <Contacts />
      </Container>
    </AppWrap>
  );
};

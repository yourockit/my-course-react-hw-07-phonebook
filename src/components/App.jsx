import { AppWrap, Container } from './App.styled';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <AppWrap>
      <Container>
        <Contacts />
      </Container>
    </AppWrap>
  );
};

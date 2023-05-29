import { AppWrap, Container } from './App.styled';
import { Contacts } from '../components/Contacts/Contacts';

export const App = () => {
  return (
    <AppWrap>
      <Container>
        <Contacts />
      </Container>
    </AppWrap>
  );
};
